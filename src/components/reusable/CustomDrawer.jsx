import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

const DRAWER_WIDTH = 80;

const Component = styled(Drawer, { name: "name_xyz", label: "label_xyz" })(
  (props) => ({
    "& .MuiDrawer-paper": {
      width: props.drawerWidth || DRAWER_WIDTH,
      backgroundColor: "#04385A",
    },
  })
);

export default function CustomDrawer(props) {
  return (
    <Component
      {...props}
      variant={props.variant || "persistent"}
      anchor="left"
      open={props.open}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px",
          height : "100%",
          paddingTop: "24px",
          paddingBottom: "20px",
        }}
      >
        {props.children}
      </div>
    </Component>
  );
}
