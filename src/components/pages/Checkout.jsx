import { useState } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  Spinner,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (!user) {
      toast({
        title: "You need to login to proceed.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }

    navigate("/payment");
  };

  return (
    <Box p={6} maxW="600px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Checkout
      </Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {cartItems.map((item) => (
            <Box key={item.id} p={4} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{item.name}</Text>
              <Text>Price: ${item.price}</Text>
            </Box>
          ))}

          <Text fontSize="xl" fontWeight="bold">
            Total: ${total}
          </Text>

          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleCheckout}
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Pay"}
          </Button>

          {success && (
            <Alert size="xl" status="success">
              <AlertIcon />
              Your order has been placed successfully!
              <Button
                colorScheme="teal"
                variant="link"
                onClick={() => navigate("/")}
                ml={2}
              >
                Continue Shopping
              </Button>
            </Alert>
          )}
        </VStack>
      )}
    </Box>
  );
};

export default Checkout;
