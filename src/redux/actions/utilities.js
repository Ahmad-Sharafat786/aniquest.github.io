function request(actionType) {
  return {
    type: actionType,
  };
}

function success(actionType, response) {
  return {
    type: actionType,
    payload: response,
  };
}

function failure(actionType, error) {
  return {
    type: actionType,
    payload: error,
  };
}

const ACCOUNT = {
  ACCOUNT_GET_USER_INFO_REQUEST: "ACCOUNT_GET_USER_INFO_REQUEST",
  ACCOUNT_GET_USER_INFO_SUCCESS: "ACCOUNT_GET_USER_INFO_SUCCESS",
  ACCOUNT_GET_USER_INFO_FAILURE: "ACCOUNT_GET_USER_INFO_FAILURE",
};

export {
  request,
  success,
  failure,
  ACCOUNT,
};
