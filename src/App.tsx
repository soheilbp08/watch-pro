import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Watches from "./watches";
import Show from "./show";
import About from "./About";
import Contact from "./contact";
import ScrollToTop from "./scroll";
import Pay from "./pay";
import Login from "./login";
import Signup from "./signup";

function App() {

  return (
    <Layout>
      <ScrollToTop />

<Routes>
  <Route path="/" element={<Home />} />

  {/* Collections */}
  <Route
  path="/watches/:brand" element={<Watches />} />
<Route path="/watches" element={<Watches />} />



  {/* Single Watch */}
  <Route path="/watch/:id" element={<Show />} />

  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/pay" element={<Pay />} />
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
</Routes>
    </Layout>
  );
}

export default App;