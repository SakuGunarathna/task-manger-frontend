import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const AppWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
  },
  [theme.breakpoints.up("lg")]: {
  },
}));

export default AppWrapper;
