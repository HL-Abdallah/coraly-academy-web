import { IconButton } from "@mui/material";

const CustomIconButton = (props) => {
  const PREFERRED_SIZE = props.prefSize || "24px";

  return (
    <IconButton
      sx={{
        width: PREFERRED_SIZE,
        height: PREFERRED_SIZE,
      }}
    >
      <img
        {...props}
        width={props.prefSize ? PREFERRED_SIZE : null}
        height={props.prefSize ? PREFERRED_SIZE : null}
      />
    </IconButton>
  );
};

export default CustomIconButton;
