import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/auth-api";
import { saveStorage } from "../apis/storage-api";
import Heading from "../components/Heading";
import { Grid } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const onGoogleSignIn = async (idToken) => {
    try {
      const response = await login(idToken);
      const token = response.headers.authorization.split(" ")[1];
      saveStorage("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Heading>Task Management System</Heading>
      <Grid container justifyContent="center">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              onGoogleSignIn(credentialResponse.credential);
            }}
            onError={() => {
              navigate("/");
            }}
          />
        </GoogleOAuthProvider>
      </Grid>
    </>
  );
};
export default Login;
