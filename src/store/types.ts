import { ICart } from "../types";

export interface TInitialState {}

export interface TState {
  cart: ICart[];
  saveForLater: { id: number }[];
}

export interface TProducts {
  id: number;

  title: string;
  price: number;
  image: string;
}

export type TAction =
  | {
      type: "ADD_TO_CART";
      payload: ICart;
    }
  | { type: "DELETE_FROM_CART"; payload: { id: number } }
  | { type: "CLEAR_CART" }
  | {
      type: "UPDATE_QUANTITY";
      payload: { id: number; quantity: number };
    }
  | {
      type: "SAVE_FOR_LATER";
      payload: { id: number };
    };
