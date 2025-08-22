import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} All rights reserved. Developed by XSMian</p>
    </footer>
  );
}

export default Footer;
