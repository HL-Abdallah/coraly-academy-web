import views from "/icons/process/TableToolbar/ViewsIconBtn.png";
import tempBtns from "/icons/process/TableToolbar/tempBtns.png";
import tables from "/icons/process/TableToolbar/tables toolbar icon.png";

import icon1 from "/icons/process/TableToolbar/Vector-1.png";
import icon2 from "/icons/process/TableToolbar/Vector-2.png";
import icon3 from "/icons/process/TableToolbar/Vector-3.png";
import icon4 from "/icons/process/TableToolbar/Vector.png";
import research from "/icons/process/TableToolbar/Research.png";
import addBtn from "/icons/process/TableToolbar/Add btn.png";
import settingsLeftSide from "/icons/process/settings/settingsLeftSide.png";

import groupBy from "/icons/process/Group by.png";
import SearchIcon from "@mui/icons-material/Search";
import {
  Typography,
  Table,
  TableRow,
  TableHead,
  TableBody,
  InputAdornment,
  Checkbox,
  TableCell,
  TextField,
  Button,
  Divider,
  Dialog,
} from "@mui/material";
import CustomIconButton from "../../components/reusable/CustomIconButton";
import ToolbarBtn from "../../components/reusable/ToolbarBtn";
import ToolbarDivider from "../../components/reusable/ToolbarDivider";
import { details } from "../../data/Process";

import { useState } from "react";
import { TextFields } from "@mui/icons-material";
import SettingsGrid from "../../components/one-off/SettingsGrid";
import ProcessDialog from "../../components/one-off/ProcessDialog";
import MyTableCell from "../../components/reusable/MyTableCell";

const Process = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [processItemOpen, setProcessItemOpen] = useState(false);

  const spanHorizontally = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "24px",
    minHeight: "65px",
    gap: "8px",
    flexWrap: "wrap",
  };

  return (
    <>
      <div
        style={{
          ...spanHorizontally,
          justifyContent: "space-between",
          borderBottom: "2px solid #EAEAEC",
        }}
      >
        <div style={{ ...spanHorizontally }}>
          <ToolbarBtn startIcon={<img src={views} alt="views button" />}>
            Views
          </ToolbarBtn>
          <ToolbarDivider />
          <ToolbarBtn startIcon={<img src={tables} alt="views button" />}>
            Tables
          </ToolbarBtn>
          <ToolbarDivider />
          <img src={tempBtns} alt="views button" />
        </div>

        <div
          style={{
            minHeight: "64px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "65px",
            gap: "16px",
            paddingRight: "8px",
          }}
        >
          <CustomIconButton src={icon4} alt="icon btn" />
          <CustomIconButton src={research} alt="icon btn" />
          <CustomIconButton src={icon1} alt="icon btn" />
          <CustomIconButton src={icon2} alt="icon btn" />
          <CustomIconButton
            src={icon3}
            alt="icon btn"
            onClick={() => setSettingsOpen(true)}
          />
          <ToolbarBtn
            startIcon={
              <img src={addBtn} alt="add button" style={{ color: "red" }} />
            }
            sx={{
              backgroundColor: "#F93E6C",
              color: "white",
              px: 2,
              "&:hover": {
                backgroundColor: "#F93E6C",
                color: "white",
              },
            }}
          >
            Add
          </ToolbarBtn>
        </div>
      </div>
      <div
        style={{
          ...spanHorizontally,
          gap: "0px",
          paddingLeft: "0px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={groupBy} alt="oo" />
        <Table>
          <TableBody>
            {details.map((item) => {
              return (
                <TableRow
                  key={Math.random()}
                  onClick={() => setProcessItemOpen(true)}
                >
                  <MyTableCell>{`           `}</MyTableCell>
                  <MyTableCell>{item.col1}</MyTableCell>
                  <MyTableCell>{item.col2}</MyTableCell>
                  <MyTableCell>{item.col3}</MyTableCell>
                  <MyTableCell>{item.col4}</MyTableCell>
                  <MyTableCell>{item.col5}</MyTableCell>
                  <MyTableCell>{item.col6}</MyTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Dialog
        PaperProps={{
          style: { borderRadius: 16, padding: 4 },
        }}
        fullScreen
        sx={{
          margin: "16px 16px 16px 96px",
        }}
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            padding: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingBottom: "16px",
            }}
          >
            <Typography
              sx={{ color: "#464356", fontWeight: 700, fontSize: "20px" }}
            >
              Impostazioni
            </Typography>
            <Typography
              sx={{ color: "#464356", fontWeight: 700, fontSize: "20px" }}
            >
              ✖
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <img src={settingsLeftSide} alt="a" />
            <Divider orientation="vertical" variant="middle" />
            <div
              id="right side parent"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height: "100%",
                width: "100%",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <TextField
                  label="Cerca Utente"
                  placeholder="Cerca Utente"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <Typography sx={{ color: "#464356", fontWeight: 600 }}>
                  {" "}
                  Membri
                </Typography>
                <ToolbarBtn
                  startIcon={
                    <img
                      src={addBtn}
                      alt="add button"
                      style={{ color: "red" }}
                    />
                  }
                  sx={{
                    backgroundColor: "#F93E6C",
                    color: "white",
                    px: 2,
                    "&:hover": {
                      backgroundColor: "#F93E6C",
                      color: "white",
                    },
                  }}
                >
                  Invita
                </ToolbarBtn>
              </div>
              <SettingsGrid />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        PaperProps={{
          style: { borderRadius: 16, padding: 4 },
        }}
        fullScreen
        sx={{
          margin: "16px 16px 16px 96px",
        }}
        open={processItemOpen}
        onClose={() => setProcessItemOpen(false)}
      >
        <ProcessDialog />
      </Dialog>
    </>
  );
};

export default Process;
