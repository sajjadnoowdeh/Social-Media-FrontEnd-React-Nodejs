export const AuthReducerFunc = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":{
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    }
    
    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
      default:
        return state;
  }
};
