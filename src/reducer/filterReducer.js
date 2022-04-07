export const filterReducer = (state, { type, payload }) => {
  const {
    category,
    category: { men, women, kid, latest },
  } = state;

  switch (type) {
    case "SHORT_BY":
      return { ...state, sortBy: payload };
    case "MAN":
      return { ...state, category: { ...state.category, men: !men } };
    case "WOMEN":
      return { ...state, category: { ...state.category, women: !women } };
    case "KID":
      return { ...state, category: { ...state.category, kid: !kid } };
    case "LATEST":
      return { ...state, category: { ...state.category, latest: !latest } };
    case "RATING":
      return { ...state, rating: parseInt(payload) };
    case "FILTER":
      return {
        ...state,
        category: {
          ...state.category,
          men: payload === "men",
          women: payload === "women",
          kid: payload === "kid",
          latest: payload === "latest",
        },
      };
    case "CLEAR":
      for (let cates in category) {
        category[cates] = false;
      }
      return { ...state, sortBy: null, rating: "1" };
    default:
      return state;
  }
};
