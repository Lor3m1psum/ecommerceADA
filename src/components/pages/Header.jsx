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
  IconButton,
  Img,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

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

  const NavLinks = ({ direction = "row" }) => (
    <Flex direction={direction} fontWeight="semibold" gap={4}>
      <Link to="/">
        <Button variant="link" color="white" fontSize="md">
          Home
        </Button>
      </Link>
      <Link to="/products">
        <Button variant="link" color="white" fontSize="md">
          Product List
        </Button>
      </Link>
      <Link to="/cart">
        <Button
          variant="link"
          color="white"
          fontSize="md"
          leftIcon={<FaShoppingCart />}
        >
          Cart ({cartCount})
        </Button>
      </Link>
    </Flex>
  );

  const AuthButtons = ({ direction = "row" }) =>
    user ? (
      <Flex direction={direction} gap={4}>
        <Text fontSize="sm">Welcome, {user.email}</Text>
        <Button width="100%" colorScheme="red" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    ) : (
      <Flex direction={direction} gap={4}>
        <Link to="/login">
          <Button width="100%" colorScheme="teal" size="sm">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button width="100%" colorScheme="teal" size="sm">
            Register
          </Button>
        </Link>
      </Flex>
    );

  return (
    <Box bg="teal.500" color="white" px={4} py={3}>
      <Flex align="center" justify="space-between" w="100%">
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
        {!isMobile && (
          <Box justifyContent="center">
            <NavLinks direction="row" />
          </Box>
        )}
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
                  <VStack align="start" spacing={6} mt={4}>
                    <NavLinks direction="column" />
                    <AuthButtons direction="column" />
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Box>
            <AuthButtons direction="row" />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
