import { IconButton } from "@mui/material";

const CustomIconButton = (props) => {
  const PREFERRED_SIZE = props.prefsize || "24px";

  return (
    <IconButton
      sx={{
        width: PREFERRED_SIZE,
        height: PREFERRED_SIZE,
      }}
      onClick={props.onClick}
    >
      <img
        src={props.src}
        alt={props.alt}
        width={props.prefsize ? PREFERRED_SIZE : null}
        height={props.prefsize ? PREFERRED_SIZE : null}
      />
      {props.children}
    </IconButton>
  );
};

export default CustomIconButton;
