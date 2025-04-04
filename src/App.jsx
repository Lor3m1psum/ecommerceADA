import "./App.css";
import Routing from "../src/routes/Routing";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
