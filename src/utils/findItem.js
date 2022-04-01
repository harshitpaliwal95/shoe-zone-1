const itemInCart = (cart, id) => {
  return cart.find((cartInItem) => cartInItem._id === id);
};

const itemInWishList = (wishlist, id) => {
  return wishlist.find((cartInItem) => cartInItem._id === id);
};
export { itemInCart, itemInWishList };
