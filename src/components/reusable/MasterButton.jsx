import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const Component = styled(Button)((props) => ({
  fontFamily: "Inter",
  color: "white",
  textTransform: "none",
  fontWeight: "600",
  backgroundColor: props.myBackgroundColor || "#04385A",
  "&:hover": {
    color: "white",
    backgroundColor: props.myBackgroundColor || "#04385A",
  },
}));

export default function MasterButton(props) {
  return (
    <Component
      variant="contained"
      fullWidth
      disableElevation
      {...props}
    ></Component>
  );
}
