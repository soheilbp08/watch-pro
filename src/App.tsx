import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Watches from "./watches";
import Show from "./show";
import Collections from "./watches";

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

  {/* Collections */}
  <Route
  path="/watches/:brand" element={<Collections />}/>

  {/* Single Watch */}
  <Route path="/watch/:id" element={<Show />} />

  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
    </Layout>
  );
}

export default App;