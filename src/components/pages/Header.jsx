import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Img,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Register from "./auth/Register";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const cartCount = cartItems.length;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const NavLinks = (
    <Box display="flex" fontWeight="semibold" gap={4}>
      <Link to="/">
        <Button variant="link" color="white" fontSize="lg">
          Home
        </Button>
      </Link>
      <Link to="/products">
        <Button variant="link" color="white" fontSize="lg">
          Product List
        </Button>
      </Link>
      <Link to="/cart">
        <Button
          variant="link"
          color="white"
          fontSize="lg"
          leftIcon={<FaShoppingCart />}
        >
          Cart ({cartCount})
        </Button>
      </Link>
    </Box>
  );

  const AuthButtons = user ? (
    <>
      <Text fontSize="sm">Welcome, {user.email}</Text>
      <Button colorScheme="red" size="sm" onClick={handleLogout}>
        Logout
      </Button>
    </>
  ) : (
    <Box>
      <Link to="/login">
        <Button colorScheme="teal" size="sm">
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button colorScheme="teal" size="sm">
          Register
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box bg="teal.500" alignItems="center" color="white" px={4} py={3}>
      <Flex justify="space-between">
        <Link to="/">
          <Flex align="center" gap={2}>
            <Img
              src="https://www.adaitw.org/icon.png"
              alt="ADA Logo"
              boxSize="50px"
            />
            <Text fontSize="xl" fontWeight="bold">
              Ecommerce ADA
            </Text>
          </Flex>
        </Link>
        {isMobile ? (
          <>
            <IconButton
              icon={<FaBars />}
              variant="ghost"
              color="white"
              onClick={onOpen}
              aria-label="Open menu"
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg="teal.600" color="white">
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack align="start" mt={4}>
                    {NavLinks}
                    {AuthButtons}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <HStack spacing={8}>{NavLinks}</HStack>
            <HStack spacing={4}>{AuthButtons}</HStack>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
