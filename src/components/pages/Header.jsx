import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex align="center">
        <HStack spacing={8}>
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
        </HStack>
        <Spacer />
        <HStack spacing={6} direction={isMobile ? "column" : "row"}>
          {user ? (
            <>
              <Text>Welcome, {user.email}</Text>
              <Link to="/profile">
                <Button colorScheme="teal" variant="outline">
                  Profile
                </Button>
              </Link>
              <Button colorScheme="red" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button colorScheme="teal">Login</Button>
            </Link>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
