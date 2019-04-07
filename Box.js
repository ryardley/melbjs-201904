import React from "react";

function getColor(color) {
  return {
    black: { bg: "#000", fg: "#fff" },
    white: { fg: "#000", bg: "#fff" },
    green: { bg: "#1A535C", fg: "#fff" },
    turquoise: { bg: "#3A9992", fg: "#FFF" },
    red: { bg: "#FF6B6B", fg: "#fff" },
    yellow: { bg: "#EFD034", fg: "#333" },
    purple: { bg: "#9F74A5", fg: "#FFF" },
    grey: { bg: "#533", fg: "#fff" }
  }[color];
}

export const Box = ({
  color = "blue",
  faded = false,
  children,
  padding = "1.5rem 2rem"
}) => (
  <div
    style={{
      backgroundColor: getColor(color).bg,
      opacity: faded ? 0.3 : 1,
      border: "1rem solid #111",
      padding,
      fontSize: 30,
      width: "100%"
    }}
  >
    <div style={{ color: getColor(color).fg, fontWeight: "300" }}>
      {children}
    </div>
  </div>
);

export const Diagram = ({ children }) => (
  <div
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
    }}
  >
    {children}
  </div>
);
