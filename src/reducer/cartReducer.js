export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartItem: [...state.cartItem, payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item._id !== payload),
      };
    default:
      return state;
  }
};
