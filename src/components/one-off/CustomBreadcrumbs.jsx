import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import breadcrumb from "/icons/process/breadcrumb.png";
import CustomIconButton from "../reusable/CustomIconButton";

const CustomBreadcrumbs = () => {
  const { process } = useParams();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          color: !process ? "#312E43" : "#83828E",
        }}
      >
        Process
      </Typography>
      {process && <CustomIconButton src={breadcrumb} alt="breadcrumb" />}
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#312E43",
        }}
      >
        {process ? process : ""}
      </Typography>
    </div>
  );
};

export default CustomBreadcrumbs;
