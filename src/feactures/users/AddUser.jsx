import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userAdded } from "./usersSlice";

export const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersAmount = useSelector((state) => state.users.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
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
        <h1>Add User</h1>
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
            Add user
          </button>
        </div>
      </div>
    </div>
  );
};
