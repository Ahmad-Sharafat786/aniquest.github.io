import { APP_SETTINGS } from "../../config";
import api from "./API";

export const getUserInfo = async (data) => {
  return await api.get(`${APP_SETTINGS.API_PATH.ACCOUNT.getUserInfo}`, {
    headers: {
      Authorization: "Bearer " + data?.access_token,
    },
  });
};
