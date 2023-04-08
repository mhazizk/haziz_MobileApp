/**
 * Get total price of all items in cart
 *
 * @param cartList - cartList state
 * @returns total prices
 */
const getTotalPrice = (cartList) => {
  let totalPrice = 0;
  cartList?.forEach((item) => {
    totalPrice += item?.price * item?.additionalInfo.quantity;
  });
  return totalPrice;
};

export default getTotalPrice;
