import CustomIconButton from "./CustomIconButton";
import privateProcess from "/icons/process/private-process.png";
import processOptions from "/icons/process/process-options.png";
import processIcon from "/icons/process/process-icon.png";
import processIcon2 from "/icons/process/process-icon-2.png";
import { Box } from "@mui/material";

const ProcessCard = (props) => {
  let BG_COLOR = props.bgColor || "grey";
  return (
    <Box
      sx={{
        height: "150px",
        width: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: BG_COLOR,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.private ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px",
            }}
          >
            <img src={privateProcess} alt="process icon" />
            <img src={processOptions} alt="process icon" />
          </div>
        ) : (
          <div style={{ height: "33px" }}></div>
        )}
        {props.shopping ? (
          <CustomIconButton src={processIcon2} alt="process icon" />
        ) : (
          <CustomIconButton src={processIcon} alt="process icon" />
        )}
      </div>
      <p
        style={{
          color: "white",
          fontWeight: "500",
        }}
      >
        {props.processName}
      </p>
    </Box>
  );
};

export default ProcessCard;
