import { IconButton, Typography } from "@mui/material";
import CustomDrawer from "./CustomDrawer";
import CustomIconButton from "./CustomIconButton";
import BoardMenuIcon from "/icons/BoardMenu.png";
import coralyLogo from "/images/Logo.png";
import img from "/icons/item.png";
import img0 from "/icons/item-0.png";
import img1 from "/icons/item-1.png";
import img2 from "/icons/item-2.png";
import img3 from "/icons/item-3.png";
import img4 from "/icons/item-4.png";
import img5 from "/icons/item-5.png";
import img6 from "/icons/item-6.png";
import imgA from "/icons/A.png";
import imgBell from "/icons/Bell.png";
import imgAvatar from "/icons/Avatar.png";

import boardIcon from "/icons/board-icon.svg";
import CustomBreadcrumbs from "../one-off/CustomBreadcrumbs";

const BoardLayout = ({ children }) => {
  const CENTERED_FLEX = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  };

  return (
    <>
      <CustomDrawer open={true}>
        <div style={CENTERED_FLEX}>
          <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
          <IconButton
            sx={{
              backgroundColor: "#FC9FB6",
              border: "1px solid #F93E6C",
              borderRadius: "8px",
              color: "white",
              fontWeight: "600",
              fontSize: "18px",
              padding: "10px",
              "&:hover": {
                backgroundColor: "#FC9FB6",
                borderColor: "#F93E6C",
              },
            }}
          >
            LD
          </IconButton>
          <div style={{ ...CENTERED_FLEX }}>
            <CustomIconButton src={boardIcon} alt="Menu icon" />
            <CustomIconButton src={img} alt="Menu icon" />
            <CustomIconButton src={img1} alt="Menu icon" />
            <CustomIconButton src={img2} alt="Menu icon" />
            <CustomIconButton src={img0} alt="Menu icon" />
            <CustomIconButton src={img3} alt="Menu icon" />
            <CustomIconButton src={img4} alt="Menu icon" />
            <CustomIconButton src={img5} alt="Menu icon" />
            <CustomIconButton src={img6} alt="Menu icon" />
          </div>
        </div>
        <CustomIconButton src={coralyLogo} alt="Menu icon" prefsize="27px" />
      </CustomDrawer>
      <div
      
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          backgroundColor: " #F5F5F5",
          marginLeft: "80px",
          height: "100%",
        }}
      >
        <div 
        id="parent-topbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height : "64px",
          gap: "0px",
          paddingLeft : "24px",
          paddingRight : "28px",
          borderBottom : "2px solid #D6D5D9",
        }}>
          <CustomBreadcrumbs />
          <div id="right-side-buttons" style={{
            display: "flex",
            alignItems: "center",
            gap : "28px",
          }}>
        
          <CustomIconButton src={imgBell} alt="Menu icon" />
          <CustomIconButton src={imgA} alt="Menu icon" />
          <CustomIconButton src={imgAvatar} alt="Menu icon" />
          </div>
        </div>
        <div 
          style={{
            height : "100%",
          }}
        >  
        {children}
         </div>
      </div>
    </>
  );
};

export default BoardLayout;
