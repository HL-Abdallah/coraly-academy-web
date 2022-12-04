import React from "react";
import {
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Radio,
} from "@mui/material";
import topRightSide from "/icons/process/processDialog/Right.png";
import frame87 from "/icons/process/processDialog/Frame87.png";
import rightSide from "/icons/process/processDialog/Right Side.png";
import tabBar from "/icons/process/processDialog/Tab bar.png";

const ProcessDialog = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "24px",
      }}
    >
      <div
        id="main-content"
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          id="titleAndBtns"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#464356",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Courtney@mail.com
          </Typography>
          <img src={topRightSide} alt="jj" />
        </div>
        <div
          id="centered-content"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div style={{ width: "50%", paddingTop: "20px", height: "100%" }}>
            <img src={frame87} alt="o" />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#464356",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Startform Name
              </Typography>
              <TextField label="Email" fullWidth />
              <TextField
                label="Description test"
                fullWidth
                multiline
                rows={2}
                helperText="this is a description test"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#464356",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Company Data
              </Typography>
              <TextField label="Company name" fullWidth />
              <TextField label="Surname" fullWidth />
              <FormControlLabel
                value="Company"
                control={<Radio />}
                label="Company"
              />
              <FormControlLabel
                value="Person"
                control={<Radio checked />}
                label="Person"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{
                  color: "#464356",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Gender
              </Typography>
              <FormControlLabel
                value="Company"
                control={<Radio />}
                label="Company"
              />
              <FormControlLabel
                value="Person"
                control={<Radio checked />}
                label="Person"
              />
              <FormControlLabel
                value="Person"
                control={<Radio />}
                label="Person"
              />
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <img src={rightSide} alt="k" />
            <img src={tabBar} alt="k" />
          </div>
        </div>
      </div>
      <div
        id="footer"
        style={{
          minHeight: "64px",
          width: "100%",
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color="#464356">
          <b>Fase ID:</b> 61571535e7058c00143322b8
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              color: "#04385A",
              "&:hover": {
                color: "#04385A",
              },
            }}
          >
            Annula
          </Button>

          <Button
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              color: "white",
              backgroundColor: "#2CCFBC",
              "&:hover": {
                color: "white",
                backgroundColor: "#2CCFBC",
              },
            }}
          >
            Salva
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProcessDialog;
