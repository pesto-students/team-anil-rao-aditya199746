import {
  SET_CART_DETAILS,
  SET_CART_PRODUCT_IDS,
  UPDATE_COUNT,
  REMOVE_FROM_CART
} from "./action";
let initialState = {
  cartList: [],
  cartListIds: ""
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DETAILS: {
      if (state.cartListIds.includes(action.payload.id)) {
        let list = [];
        console.log("ifff");
        list = state.cartList.map((obj) => {
          if (obj.id === action.payload.id) {
            obj.count += 1;
          }
          console.log(obj, "111111");
          return obj;
        });
        return { ...state, cartList: [...list] };
      } else {
        let list = {};
        console.log("else");
        list = { ...action.payload };
        list.count = 1;
        return { ...state, cartList: [...state.cartList, list] };
      }
    }
    case SET_CART_PRODUCT_IDS: {
      if (!state.cartListIds.includes(action.payload)) {
        return {
          ...state,
          cartListIds: [...state.cartListIds, action.payload]
        };
      }
      return { ...state };
    }
    case UPDATE_COUNT: {
      let list = state.cartList.map((obj) => {
        if (obj.id === action.id) {
          obj.count = action.count;
        }
        return obj;
      });
      return { ...state, cartList: [...list] };
    }
    case REMOVE_FROM_CART: {
      let list = state.cartList.filter((obj) => obj.id !== action.id);
      let ids = state.cartListIds.filter((id) => id !== action.id);
      return { ...state, cartList: [...list], cartListIds: [...ids] };
    }
    default:
      return state;
  }
};
