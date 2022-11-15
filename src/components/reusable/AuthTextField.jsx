import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const AuthTextField = styled(TextField, { label: "AuthTextField" })(
  ({ theme }) => ({
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#04385B",
      borderRadius: "8px",
    },
    "& label.Mui-focused ": {
      color: "#04385A",
      fontWeight: "700",
    },
  })
);

AuthTextField.defaultProps = {
  variant: "outlined",
  label: "default label",
  fullWidth: true,
};

export default AuthTextField;

// styled syntax documentation/reference :

/* const CustomComponentName = styled(TargetComponentFromMUI, { ...options })(({ themeObject }) => ({
    width: "100%",
    height: "100%",
    padding : themeObject.spacing(1) // this uses the default spacing from MUI : "1 spacing" = "8px" i think ? (default spacing btw)
    // your styles here.
    "& :hover ": {
        cursor: "pointer",
        // more options targeting more specific selectors.
    }
})) 

 ****** import your component and use it like this  *******

<CustomComponentName></CustomComponentName>

or :

<CustomComponentName/>

Done.
*/
