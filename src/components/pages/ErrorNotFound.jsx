import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" p={6}>
      <Image
        src="https://i.imgur.com/qIufhof.png"
        alt="Error 404"
        maxW="300px"
        mx="auto"
        mb={4}
      />
      <Text fontSize="3xl" fontWeight="bold" color="red.500">
        Oops! Page Not Found
      </Text>
      <Text fontSize="lg" mb={4}>
        The page you are looking for doesn't exist or has been moved.
      </Text>
      <Button colorScheme="teal" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorNotFound;
