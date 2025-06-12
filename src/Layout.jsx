import DesktopHeader from "./components/DesktopHeader";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">
      <DesktopHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
