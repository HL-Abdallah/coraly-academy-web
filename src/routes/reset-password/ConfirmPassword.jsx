import React from "react";
import AuthLayout from "../../components/reusable/AuthLayout";
import LoginHero from "../../components/one-off/LoginHero";
import { Typography } from "@mui/material";
import AuthTextField from "../../components/reusable/AuthTextField";
import MasterButton from "../../components/reusable/MasterButton";

const ConfirmPassword = () => {
  return (
    <>
      <AuthLayout>
        <div>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "36px",
              color: "#464356",
              fontWeight: "700",
            }}
          >
            Insert new password
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              color: "#6F6D7B",
            }}
          >
            Enter your new password to access the platform
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            width: "100%",
          }}
        >
          <AuthTextField label="New password" type="password" />
          <AuthTextField label="Confirm new password" type="password" />
          <MasterButton MyBackgroundColor="#F93E6C">
            Confirm new password
          </MasterButton>
        </div>
      </AuthLayout>
      <LoginHero />
    </>
  );
};

export default ConfirmPassword;
