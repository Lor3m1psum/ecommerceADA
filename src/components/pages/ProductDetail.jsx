import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { useParams } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase/config";
import { Box, Text, Spinner, Img, VStack, Button } from "@chakra-ui/react";

const ProductDetail = () => {
  const { addToCart } = useCart();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const docRef = doc(db, "products", id);
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         setProduct(docSnap.data());
  //       } else {
  //         console.log("No such product!");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setProduct({
        id: "123",
        name: "Producto de prueba",
        image:
          "https://t4.ftcdn.net/jpg/02/66/72/41/240_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
        description: "Este es un producto de prueba con datos ficticios.",
        price: 29.99,
      });
      setLoading(false);
    }, 1000); //
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
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
        src={product.image}
        alt={product.name}
        boxSize="300px"
        objectFit="cover"
        borderRadius="md"
        mb={4}
        mx="auto"
      />
      <VStack align="center">
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
