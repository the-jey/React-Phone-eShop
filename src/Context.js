import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

export default class ProductProvider extends Component {

  // Initial State
  state = {
    products: [],
    detailProduct: detailProduct ,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  // Start the Set Product Function
  componentDidMount() {
    this.setProducts();
  }

  //Set Products Function
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {products: tempProducts};
    });
  }

  // Get item Method
  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  // HandleDetail Function
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {detailProduct: product};
    });
  };

  // Add to Cart Function
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] }; 
    }, () => {
      this.addTotals();
    });
  };

  // Open Modal function
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    })
  }

  // Close Modal Function
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  // Increment and Decrement method
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] }
    }, () => {
      this.addTotals();
    });
  }
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if(product.count === 0) {
      this.removeItem(id)
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] }
      }, () => {
        this.addTotals();
      });
    }

  }

  // RemoveItem method
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !==id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products:[...tempProducts]
      }
    }, () => {
      this.addTotals();
    })
  }

  // Clear Cart function
  clearCart = () => {
    this.setState(() => {
      return {cart: []};
    }, () => {
      this.setProducts();
      this.addTotals();
    })
  }
  
  // Add Totals function
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    });
  }



  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};