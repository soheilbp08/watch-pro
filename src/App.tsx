import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home"
import Swatch from "./swatch";

function Collection() {
  return (
    <div className="p-16">
      <h1 className="text-4xl text-[#D4AF62]">
        Collection
      </h1>
    </div>
  );
}

function About() {
  return (
    <div className="p-16">
      <h1 className="text-4xl text-[#D4AF62]">
        About SOHNA
      </h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-16">
      <h1 className="text-4xl text-[#D4AF62]">
        Contact
      </h1>
    </div>
  );
}

function Cart() {
  return (
    <div className="p-16">
      <h1 className="text-4xl text-[#D4AF62]">
        Your Cart
      </h1>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/swatch" element={<Swatch />} />
      </Routes>
    </Layout>
  );
}

export default App;