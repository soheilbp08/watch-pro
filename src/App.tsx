import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home"
import Collections from "./watches";
import Show from "./show";

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
        <Route path="/watches/:id" element={<Collections watch={undefined as never} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </Layout>
  );
}

export default App;