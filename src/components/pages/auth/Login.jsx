import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";

import { email, password } from "../../../utils/validations";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

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
          isLoading={formState.isSubmitting}
          width="100%"
        >
          Sign in
        </Button>
        <Text mt={4} textAlign="center">
          Don't have an account?{" "}
          <Link href="/register">
            <Button variant="link" colorScheme="teal">
              Register
            </Button>
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default Login;
