import AuthLayout from "../../components/reusable/AuthLayout";
import AuthHero from "../../components/one-off/LoginHero";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import AuthTextField from "../../components/reusable/AuthTextField";
import AuthLink from "../../components/reusable/AuthLink";
import MasterButton from "../../components/reusable/MasterButton";
import { useNavigate, Link } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();

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
            Create your workspace
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              color: "#6F6D7B",
            }}
          >
            Coraly is the tool to manage your work processes form the same place
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
          <AuthTextField label="Workspace Name" />
          <AuthTextField label="Email" />
          <FormControlLabel control={<Checkbox />} label={<CheckboxLabel />} />
          <FormControlLabel
            control={<Checkbox />}
            label={<Checkbox2Label sx={{ alignSelf: "flex-start" }} />}
          />
          <MasterButton
            myBackgroundColor="#2CCFBC"
            onClick={() => navigate("/signup/email-sent")}
          >
            Create now the account
          </MasterButton>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <p>Do you have an account? </p>
            <Link to="/login">
              <AuthLink> Signin</AuthLink>
            </Link>
          </div>
        </div>
      </AuthLayout>
      <AuthHero />
    </>
  );
};

export default Step1;

const CheckboxLabel = () => {
  return (
    <>
      <span>Agree with</span> <AuthLink>Terms and Conditions</AuthLink>{" "}
      <span>,</span>
      <AuthLink>Privacy Policy</AuthLink> <span> and </span>
      <AuthLink>Cookie Policy</AuthLink>
    </>
  );
};

const Checkbox2Label = () => {
  return (
    <>
      <p style={{ fontSize: "12px" }}>
        I authorize Coraly to process my personal data in order to <br />{" "}
        receive informational, promotional and commercial <br /> communications
        via e-mail.
      </p>
    </>
  );
};
