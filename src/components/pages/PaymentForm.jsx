import { useState } from "react";
import {
  Box,
  Button,
  Input,
  useToast,
  FormControl,
  FormLabel,
  Text,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const PaymentForm = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    if (!address || !phone) {
      toast({
        title: "Please fill in all fields.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: cartItems,
        total,
        address,
        phone,
        createdAt: serverTimestamp(),
      });

      setLoading(false);
      setSuccess(true);
      clearCart();
    } catch (error) {
      console.error("Error processing payment:", error);
      setLoading(false);
      toast({
        title: "Payment failed",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={6} maxW="500px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Payment Information
      </Text>
      {!success ? (
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Shipping Address</FormLabel>
            <Input
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            size="lg"
            onClick={handlePayment}
            isDisabled={loading}
          >
            Confirm Payment
          </Button>
        </VStack>
      ) : (
        <Alert status="success">
          <AlertIcon />
          Your order has been placed successfully!
        </Alert>
      )}

      {success && (
        <Button colorScheme="teal" mt={4} onClick={() => navigate("/")}>
          Continue Shopping
        </Button>
      )}
    </Box>
  );
};

export default PaymentForm;
