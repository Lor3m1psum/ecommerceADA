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
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { email, password } from "../../../utils/validations";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { registerUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
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
          width="100%"
          type="submit"
          colorScheme="teal"
          isLoading={formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
