export const filterReducer = (state, { type, payload }) => {
  const {
    category,
    category: { men, women, kid, latest },
  } = state;

  switch (type) {
    case "sortBy":
      return { ...state, sortBy: payload };
    case "Men":
      return { ...state, category: { ...state.category, men: !men } };
    case "Women":
      return { ...state, category: { ...state.category, women: !women } };
    case "Kid":
      return { ...state, category: { ...state.category, kid: !kid } };
    case "latest":
      return { ...state, category: { ...state.category, latest: !latest } };
    case "rating":
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
    case "clear":
      for (let cates in category) {
        category[cates] = false;
      }
      return { ...state, sortBy: null, rating: "1" };
    default:
      return state;
  }
};
