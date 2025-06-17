import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Licensing from "./pages/Licensing";
import TermsOfUse from "./pages/TermsOfUse";
import BlogDetailDynamic from "./pages/BlogDetailDynamic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cases" element={<Cases />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="licensing" element={<Licensing />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="blog/:slug" element={<BlogDetailDynamic />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
