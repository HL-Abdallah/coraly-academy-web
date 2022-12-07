import { Avatar } from "@mui/material";

const processList = [
  {
    processName: "Process 1",
    shopping: false,
    private: false,
    bgColor: "#47BDFF",
  },
  {
    processName: "Process 2",
    shopping: false,
    private: true,
    bgColor: "#FF47B5",
  },
  {
    processName: "Process 3",
    shopping: true,
    private: true,
    bgColor: "#FF9F47",
  },
  {
    processName: "Process 4",
    shopping: false,
    private: false,
    bgColor: "#6C47FF",
  },
  {
    processName: "Process 5",
    shopping: false,
    private: false,
    bgColor: "#2EF1CE",
  },
  {
    processName: "Process 6",
    shopping: false,
    private: false,
    bgColor: "#F6D524",
  },
  {
    processName: "Process 7",
    shopping: false,
    private: false,
    bgColor: "#E547FF",
  },
  {
    processName: "Process 8",
    shopping: false,
    private: false,
    bgColor: "#F6D524",
  },
  {
    processName: "Process 9",
    shopping: false,
    private: false,
    bgColor: "#E547FF",
  },
  {
    processName: "Akrem's process",
    shopping: true,
    private: true,
    bgColor: "red",
  },
];

const myCol5 = (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "4px",
    }}
  >
    <Avatar sx={{ bgcolor: "#04385A",width: "30px" ,height : "30px", fontSize : "10px" }}>AD</Avatar>
    Alessandro Durni
  </div>
);

let details = [
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
  {
    col1: "VOD-153",
    col2: "Theresa Webb",
    col3: "+39 065262123",
    col4: "IT069823456",
    col5: myCol5,
    col6: new Date().toLocaleDateString(),
  },
];

export { processList, details };
