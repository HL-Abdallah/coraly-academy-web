import { Paper, Typography } from "@mui/material";
import circle_red from "/images/Ellipse 1.png";
import circle_violet from "/images/Ellipse 2.png";
import Polygon from "/images/Polygon 1.png";
import Rectangle from "/images/Rectangle 1.png";
import square_of_dots from "/images/dots.png";

const LoginHero = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F6F8FA",
      }}
    >
      <div
        id="parent_so_i_use_position=absolute"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img src={circle_red} alt="Ellipse 1" style={{}} />
        <img
          src={Polygon}
          alt="polygon"
          style={{
            position: "absolute",
            right: "0px",
            top: "120px",
          }}
        />
        <img
          src={Rectangle}
          alt=""
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
          }}
        />
        <img
          src={circle_violet}
          alt="violet half circle"
          style={{ position: "absolute", bottom: "0px", left: "100px" }}
        />
        <img
          src={square_of_dots}
          alt="dots"
          style={{
            position: "absolute",
            right: "30%",
            top: "30%",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "40%",
            left : "200px",
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "72px",
            color: "#464356",
          }}
        >
          Get started with Coraly
          <br />
          now and improve your
          <br />
          workflow
        </Typography>
      </div>
    </Paper>
  );
};

export default LoginHero;
