import { ICart } from "../types";

export interface TInitialState {}

export interface TState {
  cart: ICart[];
  saveForLater: { productId: number }[];
}

export interface TProducts {
  productId: number;
  senderFee: number;
  productName: string;
  description: string;
  img: string;
  available?: boolean;
}

export type TAction =
  | {
      type: "ADD_TO_CART";
      payload: ICart;
    }
  | { type: "DELETE_FROM_CART"; payload: { productId: number } }
  | { type: "CLEAR_CART" }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; quantity: number };
    }
  | {
      type: "SAVE_FOR_LATER";
      payload: { productId: number };
    };
