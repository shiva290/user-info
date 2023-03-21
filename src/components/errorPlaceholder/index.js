import React from "react";
import { useStyles } from "./style";

const Error = ({ error }) => {
  return (
    <div style={useStyles.errorContainer}>
      <p style={useStyles.errorText}>{error.message}</p>
    </div>
  );
};

export default Error;
