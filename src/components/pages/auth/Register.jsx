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
import { useToast } from "@chakra-ui/react";
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
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data);
      if (result?.email) {
        const toastId = toast({
          position: "top",
          duration: null,
          isClosable: true,
          render: () => (
            <Box
              bg="teal.100"
              color="teal.900"
              p={4}
              borderRadius="md"
              boxShadow="xl"
              display="flex"
              alignItems="center"
              gap={3}
              marginTop="50vh"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <Box>
                <Box fontWeight="bold">
                  {`User ${result.email} registered successfully`}
                </Box>
                <Box fontSize="sm">you will be redirected to login page</Box>
              </Box>
            </Box>
          ),
        });
        setTimeout(() => {
          toast.close(toastId);
        }, 3000);
      }
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Error during registration:", error);
      toast({
        title: "Registration failed",
        description:
          "An error occurred during registration. Please verify your credentials and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
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
