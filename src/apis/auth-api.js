import { axiosClient } from "../configs/axiosClient";
import { authUrls } from "../utils/urls";

export const login = async (idToken) => {
  const response = await axiosClient.post(authUrls.login, { idToken });

  return response;
};
