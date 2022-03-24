export const ratingSlider = (products, rating) => {
  console.log(rating);
  return products.filter((item) => Number(item.rating) >= Number(rating));
};
