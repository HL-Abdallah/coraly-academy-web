import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const MyFooter = () => {
  return <div></div>;
};

const SettingsGrid = () => {
  const columns = [
    { field: "utente", headerName: "Utente", flex: 1 },
    { field: "email", headerName: "Email", flex: 3 },
    {
      field: "parmessi",
      headerName: "Parmessi",
      flex: 2,
    },
  ];

  const rows = [
    { id: 1, utente: "Abdallah", email: "Abdallah@gmail.com" },
    { id: 2, utente: "Abdallah", email: "Abdallah@gmail.com" },
    { id: 3, utente: "Abdallah", email: "Abdallah@gmail.com" },
    { id: 4, utente: "Abdallah", email: "Abdallah@gmail.com" },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
      }}
    >
      <DataGrid
        components={{
          Footer: MyFooter,
        }}
        checkboxSelection
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default SettingsGrid;
