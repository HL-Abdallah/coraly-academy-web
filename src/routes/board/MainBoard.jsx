import { Button, Dialog, TextField, Typography } from "@mui/material";
import ProcessCard from "../../components/reusable/ProcessCard";
import { processList } from "../../data/process";
import newProcess from "/icons/process/new-process.png";
import { useState } from "react";

const MainBoard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

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
      <div
        id="processes-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div
          onClick={() => {
            // alert("new process created");
            setDialogOpen(true);
          }}
        >
          <div
            id="new-process-btn"
            style={{
              height: "150px",
              width: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #6F6D7B",
            }}
          >
            <img src={newProcess} alt="New Process" />
            <p
              style={{
                color: "#6F6D7B",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Create a new
              <br /> process
            </p>
          </div>
        </div>
        {processList.map((item) => {
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
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <div
          style={{
            width: "600px",
            height: "292px",
            padding: "24px",
          }}
        >
          <div
            id="new-process-top-section"
            style={{
              paddingBottom: "24px",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#464356",
                margin: "0px",
                padding: "0px",
              }}
            >
              Create a new process
            </p>
          </div>
          <div
            id="new-process-mid-section"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <TextField label="Process name" fullWidth />
            <TextField label="Color" fullWidth />
          </div>
          <div
            id="new-process-bot-section"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "24px",
              gap: "24px",
            }}
          >
            <Button color="error" variant="outlined">
              Annulla
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#white",
                backgroundColor: "#2CCFBC",
                "&:hover": {
                  color: "#white",
                  backgroundColor: "#2CCFBC",
                },
              }}
            >
              Crea
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MainBoard;
