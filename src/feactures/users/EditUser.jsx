import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userUpdated } from "./usersSlice";

export const EditUser = () => {
  const { pathname } = useLocation();
  const userId = pathname.replace("/edit-user/", "");

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        })
      );
      setError(null);
      history.push("/");
    } else {
      setError("Fill in All Field");
    }
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit User</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Enter your name"
            onChange={handleName}
            value={name}
          />
          <label>Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="Enter your Email"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
};
