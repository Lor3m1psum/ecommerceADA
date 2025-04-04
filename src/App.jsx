import "./App.css";
import Routing from "../src/routes/Routing";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box flex="1" as="main">
        <Routing />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
