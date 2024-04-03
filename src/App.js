import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
