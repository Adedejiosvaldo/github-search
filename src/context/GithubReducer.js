const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPO":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repo,
        loading: false,
      };

    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
export default githubReducer;
