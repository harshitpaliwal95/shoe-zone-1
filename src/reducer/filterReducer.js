export const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
