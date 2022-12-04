import { Divider } from "@mui/material";

const ToolbarDivider = () => {
  return (
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={{
        display: "flex",
        border: `2px solid #EAEAEC`,
        borderRadius: 1,
        m: 1,
      }}
    />
  );
};

export default ToolbarDivider;
