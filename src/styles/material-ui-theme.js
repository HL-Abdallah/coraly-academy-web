import { createTheme } from "@mui/material";
import "@fontsource/inter";
import "@fontsource/inter/700.css";
import "@fontsource/inter/600.css";
/**
 * Default MUI theme, with some overrides.
 */
const light = createTheme({
    typography: {
        fontFamily: "Inter",
    }
});


export default light;