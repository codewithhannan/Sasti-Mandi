import { getData, storeData } from "./storage";

export const getCartItems = async () => {
  const cartItems = await getData("cartItems");
  return cartItems ? cartItems : [];
};

export const addToCart = async (item) => {
  const cartItems = await getCartItems();
  if (cartItems) {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push(item);
    }
  } else {
    cartItems.push(item);
  }
  await storeData("cartItems", cartItems);
};
export const removeFromCart = async (item) => {
  let cartItems = await getCartItems();

  if (cartItems) {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      // Check if the item quantity is 1, then remove it from the cart
      if (cartItems[existingItemIndex].quantity === 1) {
        cartItems.splice(existingItemIndex, 1);
      } else {
        cartItems[existingItemIndex].quantity -= 1;
      }
    }
  }

  await storeData("cartItems", cartItems);
};
