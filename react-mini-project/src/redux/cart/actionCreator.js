import {
  SET_CART_DETAILS,
  SET_CART_PRODUCT_IDS,
  UPDATE_COUNT,
  REMOVE_FROM_CART
} from "./action";

export function setCartDetails(payload) {
  return {
    type: SET_CART_DETAILS,
    payload
  };
}

export function setCartProductsIds(payload) {
  return {
    type: SET_CART_PRODUCT_IDS,
    payload
  };
}
export function updateCount(id, count) {
  return {
    type: UPDATE_COUNT,
    id,
    count
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  };
}
