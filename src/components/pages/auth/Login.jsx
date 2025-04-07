import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import { email, password } from "../../../utils/validations";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => setShow(!show);
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const { login } = useAuth();

  const handleClose = () => {
    setError("");
    onClose();
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      await login(data);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      let message = "Something went wrong. Please try again.";
      switch (error.code) {
        case "auth/user-not-found":
          message = "User not found.";
          break;
        case "auth/wrong-password":
          message = "Wrong password.";
          break;
        case "auth/invalid-email":
          message = "Invalid email.";
          break;
        case "auth/missing-email":
          message = "Email is missing.";
          break;
        case "auth/invalid-credential":
          message = "Invalid credentials.";
          break;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      onOpen();
    }
  }, [error, onOpen]);

  return (
    <Box maxW="sm" mt={10} mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">User</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="please enter your email address"
            {...register("email", email)}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              id="password"
              placeholder="please enter your password"
              pr="4.5rem"
              {...register("password", password)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          type="submit"
          colorScheme="teal"
          isLoading={loading}
          width="100%"
        >
          Sign in
        </Button>
        <Text mt={4} textAlign="center">
          Don't have an account?{" "}
          <Link to="/register">
            <Button variant="link" colorScheme="teal">
              Register
            </Button>
          </Link>
        </Text>
      </form>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        isCentered
        textAlign="center"
      >
        <ModalOverlay />
        <ModalContent
          textAlign="center"
          color="red.800"
          borderRadius="md"
          boxShadow="lg"
        >
          <ModalHeader color="red.600">Error trying to login</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4} color="red.700">
            {error}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;
