import React from "react";
import Footer from "./components/Footer/Footer";
import { Container, Button, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Assuming you have a Navbar component
import Home from "./components/Home/Home"; // Assuming Home component
import ProductListing from "./components/ProductListing/ProductListing";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
