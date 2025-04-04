import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import {
  Box,
  Button,
  Grid,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const gridColumns = useBreakpointValue({
    base: "1fr",
    sm: "1fr",
    md: "1fr 1fr",
    lg: "1fr 1fr 1fr",
  });

  return (
    <Box p={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
        All Products
      </Text>
      <Grid templateColumns={gridColumns} gap={10}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            boxShadow="md"
            bg="white"
          >
            <Image
              src={product.image_url}
              alt={product.name}
              objectFit="cover"
              w="100%"
              h="180px" // Ajusta la altura para que sea rectangular
            />
            <VStack spacing={3} mt={3}>
              <Text fontSize="lg" fontWeight="bold">
                {product.name}
              </Text>
              <Text color="gray.500">${product.price.toFixed(2)}</Text>
              <Button
                colorScheme="teal"
                as={Link}
                to={`/product/${product.id}`}
              >
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
