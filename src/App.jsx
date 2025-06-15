import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cases" element={<Cases />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
