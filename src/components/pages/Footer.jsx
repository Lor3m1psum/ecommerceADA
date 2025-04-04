import {
  Box,
  Text,
  Link,
  Flex,
  IconButton,
  Img,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="pink.900" color="white" py={6} px={4} mt="auto" w="100%">
      <Flex
        direction={isMobile ? "column" : "row"}
        justify="center"
        align="center"
        gap={4}
      >
        <Flex align="center" gap={4}>
          <Img src="https://www.adaitw.org/icon.png" alt="Logo" h="40px" />
          <Text fontSize="sm" textAlign={isMobile ? "center" : "left"}>
            &copy; 2025 E-commerce ADA. All rights reserved.
          </Text>
        </Flex>

        <Stack
          direction={isMobile ? "column" : "row"}
          align="center"
          spacing={4}
        >
          <Link href="#" color="teal.200">
            Privacy Policy
          </Link>
          <Link href="#" color="teal.200">
            Terms of Service
          </Link>
        </Stack>

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
