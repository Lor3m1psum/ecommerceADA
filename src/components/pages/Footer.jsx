import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" p={4} mt={8}>
      <Flex justify="center">
        <Text fontSize="sm">&copy; 2025 E-commerce. All rights reserved.</Text>
      </Flex>
      <Flex justify="center" mt={2}>
        <Link href="#" color="teal.300" mx={2}>
          Privacy Policy
        </Link>
        <Link href="#" color="teal.300" mx={2}>
          Terms of Service
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
