import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      h="100%"
      w="100%"
      bg="white"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack p={100} spacing={6} textAlign="center">
        <Text color="gray.700" fontSize="4xl" fontWeight="bold">
          Welcome to E-commerce ADA
        </Text>
        <Text color="gray.400" fontSize="2xl">
          Where you can find great products
        </Text>
        <HStack spacing={4}>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/products")}
          >
            View Products
          </Button>
          <Button
            colorScheme="gray"
            size="lg"
            onClick={() => navigate("/about")}
          >
            About Us
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Home;
