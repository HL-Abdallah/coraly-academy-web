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
  TableBody,
  InputAdornment,
  TextField,
  Divider,
  Dialog,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CustomIconButton from "../../components/reusable/CustomIconButton";
import ToolbarBtn from "../../components/reusable/ToolbarBtn";
import ToolbarDivider from "../../components/reusable/ToolbarDivider";
import { details } from "../../data/Process";
import { useState } from "react";
import SettingsGrid from "../../components/one-off/SettingsGrid";
import ProcessDialog from "../../components/one-off/ProcessDialog";
import MyTableCell from "../../components/reusable/MyTableCell";
import DropdownItem from "../../components/reusable/DropdownItem";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import breadcrumb from "/icons/process/breadcrumb.png";



const Process = () => {

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [processItemOpen, setProcessItemOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [contractType, setContractType] = useState("");
  // for dropdown menu
  const [cardProdottiOpt, setCardProdottiOpt] = useState(false);
  const handleDropdown = () => {
    setCardProdottiOpt(prev => !prev);
  }

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
          {isDropdownOpen && <div style={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
            borderRadius : "8px",
            backgroundColor : "rgb(245 245 245)",
            width : "266px",
            height : "104px",
            padding : "8px",
            zIndex : 2000,
            position : "relative",
            top: '70px',
            right: '-38px',
            display : "flex",
            justifyContent : "space-around",
            flexDirection : "column",
          }}>
            <DropdownItem itemtext="Solo Card" isselected={!cardProdottiOpt} onClick={handleDropdown}/>
            <DropdownItem itemtext="Solo Prodotti" isselected={false} onClick={handleDropdown}/>
            <DropdownItem itemtext="Card & Prodotti" isselected={cardProdottiOpt} onClick={handleDropdown}/>
          </div>}
          <CustomIconButton src={icon4} alt="toggle side bar to the right" onClick={() => setIsDropdownOpen(prev => !prev)} />
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
            Aggiungi
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
       {cardProdottiOpt && <div
       id="info panel"
          style={{
            border: "1px solid #D6D5D9",
            position : "absolute",
            backgroundColor : "rgb(245 245 245)",
            left: "72.79%",
            right: "0%",
            padding : "24px",
            display : "flex",
            flexDirection : "column",
            justifyContent : "flex-start",
            alignItems : "flex-start",
            gap : "24px",
            height :"calc(100%)",
          }}
        >
        <TextField label="Contract Number" placeholder="EZR4O4O54K3KKKK33L33"  fullWidth/>
        <TextField label="Customer Number" placeholder="2033339228484" fullWidth/>
        <TextField label="Email" placeholder="hameurlain.abdallah@gmail.com" fullWidth/>
        {/* <TextField label="Contract Type" fullWidth/> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Contract Label</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={contractType}
            label="Contract Type"
            onChange={(e) => setContractType(e.target.value)}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Contract Type" fullWidth/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
            backgroundColor: "rgb(245 245 245)",
          }}
          >
            <CustomIconButton src={icon4}/><Typography sx={{ml : 2, fontWeight : "bold" , color : "#5A5869"}}>TIM</Typography>
          </AccordionSummary>
          <AccordionDetails           
          sx={{
            backgroundColor: "rgb(245 245 245)",
          }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion style={{
        width :"100%"
      }}>
        <AccordionSummary
          sx={{
            backgroundColor: "rgb(245 245 245)",
            width : "100%"
          }}
          expandIcon={<ExpandMoreIcon />}
        >
           <CustomIconButton src={icon4}/><Typography sx={{ml : 2, fontWeight : "bold" , color : "#5A5869"}}>Disney Plus</Typography>
        </AccordionSummary>
        <AccordionDetails           
          sx={{
            backgroundColor: "rgb(245 245 245)"
          }}>
          <div style={{
            display:"flex",
            flexDirection : "column",
            justifyContent : "flex-start",
            alignItems : "center",
            gap : "24px",
            width : "100%",
          }}>
                <TextField label="Email" placeholder="hameurlain.abdallah@gmail.com" fullWidth/>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Contract Label</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={contractType}
            label="Contract Type"
            onChange={(e) => setContractType(e.target.value)}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Contract Type" fullWidth/>

          </div>
        </AccordionDetails>
    </Accordion>
    <div id="info panel footer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems : "center",
        width : "100%",
        alignSelf : "flex-end",
        marginTop : "170px",
      }}
    >

      <div id="navigation btns" style={{
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        width : "10%",
      }}>
      <Typography sx={{fontSize : "24px"}}>{"<"}</Typography>
      <Typography sx={{fontSize : "24px"}}>{">"}</Typography>
      </div>

      <div 
      id="yes-no btns" 
      style={{
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        gap :"16px",
      }}>
      <Button sx={{
        color : " #04385A",
        "&:hover": {
          color : " #04385A",
        }
      }} 
      variant="outlined"
      >Annula</Button>
      <Button sx={{
        color : "white",
        backgroundColor: "#2CCFBC",
        "&:hover": {
          color : "white",
          backgroundColor: "#2CCFBC",
        }
      }}>Salva</Button>
      </div>
    </div>
        </div>}
        <img src={groupBy} alt="btn group above the table" />
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
        id="opened-options-menu"
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
              sx={{ color: "#464356", fontWeight: 700, fontSize: "20px" , cursor : "pointer"}}
              onClick={() => setSettingsOpen(false)}
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
        id="opened-process-dialog"
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
