import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

const DRAWER_WIDTH = 80;

const Component = styled(Drawer)((props) => ({
  "& .MuiDrawer-paper": {
    width: DRAWER_WIDTH,
    backgroundColor: "#04385A",
    boxSizing: "border-box",
  },
}));

export default function CustomDrawer(props) {
  return (
    <Component
      {...props}
      variant={props.variant || "persistent"}
      anchor="left"
      open={props.open}
    ></Component>
  );
}
