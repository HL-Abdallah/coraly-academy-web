import React from "react";
import { Typography } from "@mui/material";

const Frame3 = ({ mainText, secondaryText }) => {
  return (
    <div id="frame-3">
      <Typography
        sx={{
          fontSize: "24px",
          lineHeight: "36px",
          color: "#464356",
          fontWeight: "700",
        }}
      >
        {mainText}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6F6D7B",
        }}
      >
        {secondaryText}
      </Typography>
    </div>
  );
};

export default Frame3;
