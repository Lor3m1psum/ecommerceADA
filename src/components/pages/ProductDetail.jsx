import React from "react";
import { useCart } from "../hooks/useCart";
import { Box, Button, Img, Stack, Text } from "@chakra-ui/react";

export const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Box p={4} axW="600px" mt={10} mx="auto" borderRadius="xl">
      <Text fontSize="2xl" fontWeight="bold">
        {product.name}
      </Text>
      <Img
        src={product.image}
        alt={product.name}
        boxSize="300px"
        objectFit="cover"
        borderRadius="md"
        mb={4}
      />
      <Stack>
        <Text color="gray.500" fontWeight="thin">
          {product.description}
        </Text>
        <Text fontSize="xl" fontWeight="semibold">
          {product.price}
        </Text>
        <Button colorScheme="teal" onClick={() => addToCart({ product })}>
          Add to Cart
        </Button>
      </Stack>
    </Box>
  );
};
