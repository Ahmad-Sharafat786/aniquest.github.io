import { getUserInfo } from "../api/accountApi";
import { request, success, failure, ACCOUNT } from "./utilities";

export function AccountGetUserInfo(data, setLocalStorage, notification) {
  return (dispatch) => {
    dispatch(request(ACCOUNT.ACCOUNT_GET_USER_INFO_REQUEST));
    getUserInfo(data).then(
      (response) => {
        if (response.data.success === true) {
          dispatch(
            success(ACCOUNT.ACCOUNT_GET_USER_INFO_SUCCESS, response.data.data)
          );
          if (notification) {
            notification(response.data.message, "success");
          }
          if (setLocalStorage) {
            setLocalStorage(response.data.data);
          }
        } else {
          dispatch(
            failure(
              ACCOUNT.ACCOUNT_GET_USER_INFO_FAILURE,
              response.data.message
            )
          );
          if (notification) {
            notification(response.data.message, "error");
          }
        }
      },
      (error) => {
        dispatch(
          failure(
            ACCOUNT.ACCOUNT_GET_USER_INFO_FAILURE,
            error && error.message ? error.message : error.message
          )
        );
        if (notification) {
          notification(error.message, "error");
        }
      }
    );
  };
}
