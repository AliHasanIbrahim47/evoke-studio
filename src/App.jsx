import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Portrait from "./pages/Portrait/Portrait";
import Wedding from "./pages/Wedding/Wedding";
import About from "./pages/About/About";
import NavBar from "./NavBar/NavBar";
import Product from "./pages/Product/Product";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portrait" element={<Portrait />}></Route>
        <Route path="/weddings" element={<Wedding />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
