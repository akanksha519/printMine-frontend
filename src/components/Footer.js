import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} PrintMine Clone. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#333",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
