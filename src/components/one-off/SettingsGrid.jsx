import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return console.log(JSON.stringify(thisRow, null, 4));
        };
        return (
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={30}
              onChange={null}
              style={{
                backgroundColor : "#F93E6C",
                color : "white",
                borderRadius : "8px",
                height : "30px",
                border :"none",
              }}
            >
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>Utente</MenuItem>
              <MenuItem value={30}>Vendittore</MenuItem>
              <MenuItem value={40}>Solo Lettura</MenuItem>
            </Select>
          </FormControl>
        );
      },
    },
  ];

  const rows = [
    { id: 1, utente: "Abdallah", email: "Abdallah@gmail.com" },
    { id: 2, utente: "Abderrahmen", email: "Abderrahmen@gmail.com" },
    { id: 3, utente: "Michael", email: "Michael@gmail.com" },
    { id: 4, utente: "Ilyas", email: "Ilyas@gmail.com" },
    { id: 5, utente: "George", email: "George@gmail.com" },
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
