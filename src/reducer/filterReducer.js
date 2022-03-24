import { ACTION } from "../action/action";
export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.GET_DATA:
      return { ...state, product: payload };
    case ACTION.HIGH_TO_LOW:
      return {
        ...state,
        shortBy: state.product.sort((a, b) => b.price - a.price),
      };
    case ACTION.LOW_TO_HIGH:
      return {
        ...state,
        shortBy: state.product.sort((a, b) => a.price - b.price),
      };
    case ACTION.CATEGORY:
      return {
        ...state,
        category: state.product.filter((item) => item.categoryName === payload),
      };
    default:
      return state;
  }
};
