import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Karan Bhatt. All rights reserved.</p>
      <p>Designed with ❤️ using React</p>
    </footer>
  );
}
export default Footer;
