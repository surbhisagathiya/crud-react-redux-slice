import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
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
    <Container>
      <Heading as="h3" size="lg" color="green" align="center">
        Edit User
      </Heading>
      {/* <Box my={4} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              onChange={handleName}
              value={name}
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your Email"
              onChange={handleEmail}
              value={email}
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>
          {error && error}
          <ButtonGroup
            variant="outline"
            spacing="6"
            display="block"
            align="right"
            my={4}
          >
            <Button colorScheme="blue" onClick={handleClick}>
              Update
            </Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </form>
      </Box> */}

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
    </Container>
  );
};
