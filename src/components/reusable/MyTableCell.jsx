import { TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

const Component = styled(TableCell)((props) => ({
  border: "1px solid #EAEAEC",
  padding: "9px",
}));

export default function MyTableCell(props) {
  return <Component {...props}>{props.children}</Component>;
}