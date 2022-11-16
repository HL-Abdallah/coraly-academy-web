import { IconButton } from "@mui/material"

const CustomIconButton = (props) => {
  return (
    <IconButton sx={{border : "2px solid white",width : "80px",}}>
        <img {...props} />
    </IconButton>
  )
}

export default CustomIconButton