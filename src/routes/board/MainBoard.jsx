import { Typography } from "@mui/material";
import ProcessCard from "../../components/reusable/ProcessCard";
import { processList } from "../../data/process";

const MainBoard = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        paddingTop: "50px",
        paddingLeft: "24px",
        height: "100%",
        backgroundColor: "#f6f8fa",
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "36px",
          color: "#464356",
        }}
      >
        Welcome, Fabrizio Nillo
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          color: "#5A5869",
        }}
      >
        Work with your team mates, take track of your process and <br /> close
        all tasks
      </Typography>
      {/* div with centered blocks */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {processList.map((item) => {
          console.log(item);
          return (
            <ProcessCard
              key={item.processName}
              processName={item.processName}
              shopping={item.shopping}
              private={item.private}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainBoard;
