import { Paper, Typography, Snackbar, Alert } from "@mui/material";
import Frame3 from "../../components/one-off/Frame3";
import AuthTextField from "../../components/reusable/AuthTextField";
import Frame6 from "../../components/one-off/Frame6";
import MasterButton from "../../components/reusable/MasterButton";
import AuthLink from "../../components/reusable/AuthLink";
import LoginHero from "../../components/one-off/LoginHero";
import { useState } from "react";
import { login } from "../../data/Users";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/reusable/AuthLayout";

const Login = () => {
  const navigate = useNavigate();

  const frame5Styles = {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    width: "100%",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  };

  const [loginFailed, setLoginFailed] = useState(false);
  const handleLoginFailed = () => {
    setLoginFailed(false);
  };
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleLoginSuccess = () => {
    setLoginSuccess(false);
  };

  const handleLogin = () => {
    const response = login(user.email, user.password);
    if (response === "404") {
      console.log("login failed");
      // show error message
      setLoginFailed(true);
    } else {
      console.log("login success");
      // show success message
      setLoginSuccess(true);
      setTimeout(() => {
        navigate("/board");
      }, 2000);
    }
  };
  return (
    <>
      <AuthLayout>
        <Frame3
          mainText={"Login"}
          secondaryText={"Thanks to come back on Coraly"}
        />
        <div id="frame-5" style={frame5Styles}>
          <AuthTextField
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <AuthTextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Frame6 />
          <MasterButton onClick={handleLogin}>Login</MasterButton>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Typography fontSize="14px">Dont have an account ? </Typography>
            <p>&nbsp;</p>
            <Link to={"/signup"}>
              <AuthLink>Sign Up Now</AuthLink>
            </Link>

            <Snackbar open={loginFailed} onClose={handleLoginFailed}>
              <Alert severity="error" sx={{ width: "360px" }}>
                Credenziali non valide
              </Alert>
            </Snackbar>
            <Snackbar open={loginSuccess} onClose={handleLoginSuccess}>
              <Alert severity="success" sx={{ width: "360px" }}>
                Utente autenticato con successo
              </Alert>
            </Snackbar>
          </div>
        </div>
      </AuthLayout>
      <LoginHero />
    </>
  );
};

export default Login;
