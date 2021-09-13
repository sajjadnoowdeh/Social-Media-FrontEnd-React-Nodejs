export const AuthReducer = (state, action) => {
  switch (action.type) {
    case action.type === "LOGIN_START":
      return {
        user: {},
        isFetching: true,
        error: false,
      };
    case action.type === "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case action.type === "LOGIN_ERROR":
      return {
        user: {},
        isFetching: false,
        error: true,
      };
  }
};
