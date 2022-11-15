import { Typography } from "@mui/material";
import LoginHero from "../../components/one-off/LoginHero";
import AuthLayout from "../../components/reusable/AuthLayout";
import AuthTextField from "../../components/reusable/AuthTextField";
import MasterButton from "../../components/reusable/MasterButton";

const Step2 = () => {
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
            Complete your profile
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              color: "#6F6D7B",
            }}
          >
            Insert all your info to proceed with your workspace
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <AuthTextField label="Name"></AuthTextField>
            <AuthTextField label="Surname"></AuthTextField>
          </div>
          <AuthTextField label="Password"></AuthTextField>
          <AuthTextField label="Repeat Password"></AuthTextField>
          <MasterButton MyBackgroundColor="#2CCFBC">Complete Now</MasterButton>
        </div>
      </AuthLayout>
      <LoginHero />
    </>
  );
};

export default Step2;
