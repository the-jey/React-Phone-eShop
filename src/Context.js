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
    modalProduct: detailProduct
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
      console.log(this.state);
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

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};