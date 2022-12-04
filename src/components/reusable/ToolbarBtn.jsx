import { Button } from "@mui/material";
import {styled} from "@mui/material/styles"

const Component = styled(Button)((props) => ({
  textTransform : "none",
}));

export default function ToolbarBtn(props) {
  return <Component {...props}>{props.children}</Component>;
}
