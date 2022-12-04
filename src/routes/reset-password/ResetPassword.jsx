import LoginHero from "../../components/one-off/LoginHero";
import AuthLayout from "../../components/reusable/AuthLayout";
import { Typography } from "@mui/material";
import AuthTextField from "../../components/reusable/AuthTextField";
import MasterButton from "../../components/reusable/MasterButton";
import AuthLink from "../../components/reusable/AuthLink";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

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
            Do you forgot your
            <br />
            password?
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              color: "#6F6D7B",
            }}
          >
            Insert your email and we will send you a link in your email box to
            reset your password.
          </Typography>
        </div>
        <AuthTextField
          label="Email"
          type="email"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <MasterButton
          myBackgroundColor="#F93E6C"
          disabled={
            !String(data)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          }
          onClick={() => navigate("email-sent")}
        >
          Reset Password
        </MasterButton>
        <Typography>
          <Link to="/login">
            Go back to <AuthLink>Login</AuthLink>
          </Link>
        </Typography>
      </AuthLayout>
      <LoginHero />
    </>
  );
};

export default ResetPassword;
