import "./App.css";
import Routing from "../src/routes/Routing";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="95vh">
      <Header />
      <Routing />
      <Footer />
    </Box>
  );
}

export default App;
