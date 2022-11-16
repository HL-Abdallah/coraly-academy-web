import { Paper } from "@mui/material";
import React from "react";
import logo from "/images/Logo.png";

const AuthLayout = ({ children }) => {
  const leftPanelStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "100px 100px 150px",
    gap: "100px",
    minWidth: "590px",
    height: "100%",
  };
  const frame4Styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "50px",
    width: "100%",
  };

  return (
    <>
      <Paper sx={leftPanelStyles} elevation={0}>
        <img src={logo} alt="coraly-logo" />
        <div id="frame-4" style={frame4Styles}>
          {children}
        </div>
      </Paper>
    </>
  );
};

export default AuthLayout;
