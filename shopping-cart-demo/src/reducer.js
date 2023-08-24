import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }; // return empty map similar to [] for empty array
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart); // create new Map instance
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart }; // copy existing values, overwrite with newCart
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart); // create new Map instance
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart }; // copy existing values, overwrite with newCart
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart); // create new Map instance
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    if (item.amount === 1) { // if there is only one item, remove it instead of displaying 0
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart }; // copy existing values, overwrite with newCart
  }
  if(action.type === LOADING) {
    return {...state, loading: true}
  }
  if(action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]))
    return {...state, loading: false, cart: newCart}
  }


  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
