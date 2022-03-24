export const filterReducer = (state, action) => {
  const clearState = {
    product: [],

    sortBy: null,
    category: {
      men: false,
      women: false,
      kid: false,
      latest: false,
    },
  };

  const { men, women, kid, latest } = state;
  const { type, payload } = action;
  switch (type) {
    case "sortBy":
      return { ...state, sortBy: action.payload };
    case "Men":
      return { ...state, category: { ...state.category, men: !men } };
    case "Women":
      return { ...state, category: { ...state.category, women: !women } };
    case "Kid":
      return { ...state, category: { ...state.category, kid: !kid } };
    case "latest":
      return { ...state, category: { ...state.category, latest: !latest } };
    case "rating":
      return { ...state, rating: parseInt(action.payload) };
    case "clear":
      return clearState;
    default:
      return state;
  }
};
