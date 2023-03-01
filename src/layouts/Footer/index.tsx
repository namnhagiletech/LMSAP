import React from "react";
import Navbar from "../Navbar";

const Footer = () => {
  return (
    <footer
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#fff",
      }}
    >
      <Navbar />
    </footer>
  );
};

export default Footer;
