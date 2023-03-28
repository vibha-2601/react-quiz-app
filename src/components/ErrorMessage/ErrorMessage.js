import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        textTransform: "uppercase",
        color: "white",
        backgroundColor: "orangered",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
