import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "black",
  fontWeight: 600,
  paddingTop: "2em",
  paddingBottom: "1em",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export default Heading;