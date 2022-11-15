import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const AuthLink = styled(Typography, { label: "AuthTextField" })(
  ({ theme }) => ({
    color: "#2CCFBC",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "21px",
  })
);

AuthLink.defaultProps = {
  component: "span",
};

export default AuthLink;
