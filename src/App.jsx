import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import light from "./styles/material-ui-theme";
import Login from "./routes/login/Login";
import EmailSent from "./routes/signup/SignupEmailSent";
import Step1 from "./routes/signup/Step1";
import Step2 from "./routes/signup/Step2";
import ResetPassword from "./routes/reset-password/ResetPassword";
import ResetEmailSent from "./routes/reset-password/ResetEmailSent";
import ConfirmPassword from "./routes/reset-password/ConfirmPassword";
import Board from "./routes/board/Board";
import ErrorPage from "./routes/404/ErrorPage";

function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/signup">
            <Route index element={<Navigate to="step-1" />} />
            <Route path="step-1" element={<Step1 />} />
            <Route path="email-sent" element={<EmailSent />} />
            <Route path="step-2" element={<Step2 />} />
          </Route>
          <Route path="/reset-password">
            <Route index element={<ResetPassword />} />
            <Route path="email-sent" element={<ResetEmailSent />} />
            <Route path="confirm-password" element={<ConfirmPassword />} />
          </Route>
          <Route path="/board" >
            <Route index element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
