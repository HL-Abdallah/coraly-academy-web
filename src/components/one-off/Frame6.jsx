import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthLink from "../reusable/AuthLink";

const Frame6 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "-12px",
      }}
    >
      <FormControlLabel control={<Checkbox />} label="Remember Me" />
      <Link to="/reset-password">
        <AuthLink>Forgot Password</AuthLink>
      </Link>
    </div>
  );
};

export default Frame6;
