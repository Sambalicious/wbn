import { ICart } from "../types";

export const storage = {
  get: function (key: string) {
    try {
      let response = localStorage.getItem(key);
      return response ? JSON.parse(response) : null;
    } catch (error) {
      //console.log(error);
    }
  },
  post: <T>(key: string, value: T) => {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  delete: (key: string) => {
    return localStorage.removeItem(key);
  },
};

export const pluralise = (amount: number, unit: string) => {
  if (amount > 1) {
    return `${amount} ${unit}s`;
  }

  return `${amount} ${unit}`;
};

export const isMobile = () => {
  if (typeof window !== "undefined") {
    if (window.screen.width <= 768) {
      return true;
    }
  }
  return false;
};

export const formatCurrency = (amount: number) => {
  try {
    if (amount || amount === 0) {
      let formatedAmount = new Intl.NumberFormat(`en-us`, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(Number(amount));
      return formatedAmount;
    }
  } catch (error) {
    return amount;
  }
};

export function sumCart() {
  let cartData = (storage.get("state")?.cart as ICart[]) ?? [];

  if (cartData.length > 0) {
    return cartData?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
  return 0;
}
