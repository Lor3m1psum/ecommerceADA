import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Box, Text, Spinner, Img, VStack, Button } from "@chakra-ui/react";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("id useparams", id);
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("existe o no", docSnap.exists());
          setProduct(docSnap.data());
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Spinner color="teal.400" size="xl" />;
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4} maxW="600px" mt={10} mx="auto" borderRadius="xl">
      <Text fontSize="2xl" fontWeight="bold">
        {product.name}
      </Text>
      <Img
        src={product.image_url}
        alt={product.name}
        boxSize="300px"
        objectFit="cover"
        borderRadius="md"
        mb={4}
        mx="auto"
      />
      <VStack spacing={4} align="center">
        <Text color="gray.500" fontWeight="thin">
          {product.description}
        </Text>
        <Text fontSize="xl" fontWeight="semibold">
          ${product.price.toFixed(2)}
        </Text>
        <Button colorScheme="teal" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;
