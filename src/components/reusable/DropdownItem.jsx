import { PropaneSharp } from "@mui/icons-material";

const DropdownItem = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor : "pointer"
      }}
      onClick={props.onClick}
    >
      <span style={{color: "#312E43",fontSize : "12px"}}>{props.itemtext}</span>
      {props.isselected && <span>✔</span>}
    </div>
  );
};

export default DropdownItem;
