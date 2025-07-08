import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Cases", href: "/cases" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Layout = () => {
  const location = useLocation();
  // Find the nav link whose href matches the start of the current path
  const activeLink = navLinks.find((link) =>
    link.href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(link.href),
  )?.label;
  const isHome = location.pathname === "/";
  return (
    <div
      className={`relative ${isHome ? "bg-[rgb(245,246,249)]" : "bg-white"}`}
    >
      <DesktopHeader activeLink={activeLink} />
      <MobileHeader activeLink={activeLink} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
