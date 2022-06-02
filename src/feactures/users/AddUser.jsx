import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
} from "@chakra-ui/react";
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
    <Container maxW="container.sm" boxShadow="lg" mt={10} p={8} rounded="md">
      <IconButton
        variant="link"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        onClick={() => history.goBack()}
        _focus={{ boxShadow: "none" }}
        icon={<ChevronLeftIcon />}
      />
      <Heading as="h3" size="lg" color="green" align="center">
        Add User
      </Heading>
      <Box my={4} textAlign="left">
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
              Save
            </Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </form>
      </Box>
    </Container>
  );
};
