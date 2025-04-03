import React from "react";
import { useCart } from "../../context/CartContext";
import { Box, Button, Text } from "@chakra-ui/react";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  return (
    <Box p={4}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <Text>Your Cart is empty</Text>
      ) : (
        cartItems.map((item) => (
          <Box key={item.id} border="1px solid gray" p={2} mb={2}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </Box>
        ))
      )}
      {cartItems.length > 0 && (
        <Button colorScheme="teal" mt={4} onClick={clearCart}>
          Empty Cart
        </Button>
      )}
    </Box>
  );
};

export default Cart;
