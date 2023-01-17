import { storage } from "@/utils/helpers";
import toast from "react-hot-toast";
import { TAction, TState } from "store/types";

function checkItemExistInArray<T extends { id: number }>(
  array: T[],
  id: number,
) {
  return array?.find(item => item.id === id);
}

function deleteItemFromArray<T extends { id: number }>(array: T[], id: number) {
  return array.filter(item => item.id !== id);
}

export const appReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "ADD_TO_CART":
      /** delete the item from saveForLater if user decides to add the item to cart now */
      const newSavedItems = deleteItemFromArray(
        state.saveForLater,
        action.payload.id,
      );
      /** check if the item already exist in cart; if yes, increase the quantity instead. if No, add the item to cart */
      const cartItem = checkItemExistInArray(state.cart, action.payload.id);

      if (!!cartItem) {
        let newState = {
          ...state,
          saveForLater: newSavedItems,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
        toast.success(`Item quantity has been updated successfully`);
        storage.post("state", newState);

        return newState;
      } else {
        let result = {
          ...state,
          saveForLater: newSavedItems,
          cart: [...state?.cart, action.payload],
        };
        storage.post("state", result);
        toast.success(`Item has been added to cart`);
        return result;
      }

    case "DELETE_FROM_CART":
      /** return a new cart with the selected item filtered out */
      let result = {
        ...state,
        cart: deleteItemFromArray(state.cart, action.payload.id),
      };

      storage.post("state", result);
      toast.success(`Item has been deleted from cart`);
      return result;

    case "UPDATE_QUANTITY":
      const findCartItem = checkItemExistInArray(state.cart, action.payload.id);

      /** if you decides to update the quantity of the item, Remove the item from saveForLater  */
      const updatedSavedItem = deleteItemFromArray(
        state.saveForLater,
        action.payload.id,
      );

      if (!!findCartItem) {
        let newState = {
          ...state,
          saveForLater: updatedSavedItem,
          cart:
            findCartItem.quantity + action.payload.quantity < 2
              ? deleteItemFromArray(state.cart, action.payload.id)
              : state.cart.map(item =>
                  item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item,
                ),
        };
        toast.success(`Item quantity has been update successfully`);
        storage.post("state", newState);

        return newState;
      } else {
        let updatedCart = {
          ...state,
          saveForLater: updatedSavedItem,
          cart: [...state?.cart, action.payload],
        };
        storage.post("state", updatedCart);
        toast.success(`Item has been added to cart`);
        return updatedCart;
      }

    case "CLEAR_CART":
      storage.post("state", { ...state, cart: [] });
      return {
        ...state,
        cart: [],
      };

    case "SAVE_FOR_LATER":
      const savedItem = checkItemExistInArray(
        state.saveForLater,
        action.payload.id,
      );

      /**if item was added to cart, removed saveForLater item from cart */
      let filterCartItems = deleteItemFromArray(state.cart, action.payload.id);

      let savedItems = {
        ...state,
        cart: filterCartItems,
        saveForLater: [
          ...state.saveForLater,
          savedItem ? { ...savedItem } : action.payload,
        ],
      };
      storage.post("state", savedItems);
      toast.success(`Item has been added to buy later`);
      return savedItems;

    default:
      return state;
  }
};
