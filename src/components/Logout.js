import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return <Button onClick={() => handleLogout()}>Logout</Button>;
};
export default Logout;
