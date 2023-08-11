import { ActionTypes } from "./contants/action_type";
const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export default setProducts;

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product.product,
  };
};
