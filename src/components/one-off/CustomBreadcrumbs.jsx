import { Typography } from "@mui/material";

const CustomBreadcrumbs = () => {
  return (
    <div style={{
      display : "flex",
    }}>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#312E43",
        }}
      >
        Process
      </Typography>
    </div>
  );
};

export default CustomBreadcrumbs;
