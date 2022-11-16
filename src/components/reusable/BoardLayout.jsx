import { IconButton } from "@mui/material";
import React from "react";
import CustomDrawer from "./CustomDrawer";
import CustomIconButton from "./CustomIconButton";
import BoardMenuIcon from "/icons/BoardMenu.png"

const BoardLayout = ({ children }) => {
  return (
    <>
      <CustomDrawer open={true} >
        <CustomIconButton src={BoardMenuIcon} alt="Menu icon"/>
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
