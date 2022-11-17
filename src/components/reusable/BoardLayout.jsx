import { IconButton } from "@mui/material";
import React from "react";
import CustomDrawer from "./CustomDrawer";
import CustomIconButton from "./CustomIconButton";
import BoardMenuIcon from "/icons/BoardMenu.png";
import coralyLogo from "/images/Logo.png";
import img from "/icons/item";
import img0 from "/icons/item-0";
import img1 from "/icons/item-1";
import img2 from "/icons/item-2";
import img3 from "/icons/item-3";
import img4 from "/icons/item-4";
import img5 from "/icons/item-5";
import img6 from "/icons/item-6";

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
            <CustomIconButton src={img} alt="Menu icon" />
            <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
            <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
            <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
            <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
            <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
            <CustomIconButton src={BoardMenuIcon} alt="Menu icon" />
          </div>
        </div>
        <CustomIconButton src={coralyLogo} alt="Menu icon" prefSize="27px" />
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
        {children}
      </div>
    </>
  );
};

export default BoardLayout;
