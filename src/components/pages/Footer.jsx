import { Box, Text, Link, Flex, IconButton, Img } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="pink.900" color="white" p={2} w="100%" mt="auto">
      <Flex justify="center" align="center">
        <Img src="https://www.adaitw.org/icon.png" alt="Logo" h="50px" />
        <Text fontSize="sm">
          &copy; 2025 E-commerce ADA. All rights reserved.
        </Text>
      </Flex>
      <Flex justify="center" mt={2}>
        <Link href="#" color="teal.300" mx={2}>
          Privacy Policy
        </Link>
        <Link href="#" color="teal.300" mx={2}>
          Terms of Service
        </Link>
      </Flex>
      <Flex justify="center" mt={2}>
        <Link href="https://www.instagram.com/adaitw" isExternal>
          <IconButton
            icon={<FaInstagram />}
            aria-label="Instagram"
            colorScheme="teal"
            variant="ghost"
            size="md"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
