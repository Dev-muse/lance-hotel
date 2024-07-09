import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center mt-4">
      &copy; Copyright {year} Lance All rights reserved.{" "}
    </footer>
  );
};

export default Footer;
