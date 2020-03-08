import React, { Component } from 'react';
import Title from '../shared/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="container-fluid my-2">
                    <Title name="Votre" title="Panier"></Title>
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}