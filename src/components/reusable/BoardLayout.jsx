import React from "react";
import CustomDrawer from "./CustomDrawer";

const BoardLayout = ({ children }) => {
  return (
    <>
      <CustomDrawer open={true} />
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
