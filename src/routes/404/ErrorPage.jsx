import { Typography, Button } from "@mui/material";
import err404 from "/images/404.png";

const ErrorPage = () => {

  return (
    <div style={{
        display :"flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        maxWidth : "600px",
        gap: "16px",
    }}>
      <img src={err404} alt="error 404" />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "24px",
          color : "#312E43",
        }}
      >
        Page not found
      </Typography>
      <Typography
        sx={{
            fontSize: "14px",
            color : "#5A5869",
        }}
        align='center'
      >
        The page you are trying to reach is not available. It may have been
        deleted or its URL was misspelled.
      </Typography>
      <Button variant="contained" sx={{
        backgroundColor : "#04385A",
        textTransform : "none",
        "&:hover" : {
          backgroundColor : "#04385A",
        },
        borderRadius : "8px",
      }}>Go Back</Button>
    </div>
  );
};

export default ErrorPage;
