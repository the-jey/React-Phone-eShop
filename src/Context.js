import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

export default class ProductProvider extends Component {

  // Initial State
  state = {
    products: [],
    detailProduct: detailProduct 
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

  // HandleDetail Function
  handleDetail = () => {
    console.log('Hello from detail');
  };

  // Add to Cart Function
  addToCart = (id) => {
    console.log(`Hello from add to cart ID is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};