import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIN from "./Pages/SigninPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-conatiner">
          <NavBar />

          <Routes>
            <Route path="/" element={<Protected Components={ProductsPage} />} />
            <Route path="/signin" element={<SignIN />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
