export const filterReducer = (state, action) => {
  const { category } = state;
  const { men, women, kid, latest } = state.category;
  const { type, payload } = action;
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
    case "clear":
      for (let cates in category) {
        category[cates] = false;
      }
      return { ...state, sortBy: null, rating: "1" };
    default:
      return state;
  }
};
