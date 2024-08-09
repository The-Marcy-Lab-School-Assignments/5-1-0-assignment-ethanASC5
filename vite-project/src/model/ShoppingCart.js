import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  #cartItems = [];
  static #allCarts = [];

  constructor() {
    this.id = getId();

    ShoppingCart.#allCarts.push(this);
  }

  createItem(name, price) {
    const addedItem = new CartItem(name, price);
    this.#cartItems.push(addedItem);
    return addedItem;
  }

  getItems() {
    return [...this.#cartItems];
  }

  removeItem(id) {
    this.#cartItems.splice(
      this.#cartItems.findIndex((item) => item.id === id),
      1
    );
  }

  getTotal() {
    return this.#cartItems.reduce((acc, { price }) => acc + price, 0);
  }

  static listAll() {
    return [...this.#allCarts];
  }

  static findBy(searchTerm) {
    return ShoppingCart.#allCarts.find(({ id }) => id === searchTerm);
  }
}

export default ShoppingCart;