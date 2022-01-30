const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      console.log("action.payload", action.payload);
      return {
        ...state,
        CurrentUser: action.payload,
      };
    case "SIGNUP_USER":
      return {
        ...state,
        CurrentUser: action.payload,
      };
    case "SIGNIN_DONOR":
      return {
        ...state,
        CurrentUser: action.payload,
      };
    case "SIGNUP_DONOR":
      return {
        ...state,
        CurrentUser: action.payload,
      };
    case "UPDATE_DONOR":
      return {
        ...state,
        CurrentUser: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        CurrentUser: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        CurrentUser: null,
      };

    default:
      return {};
  }
};
export default userReducer;
