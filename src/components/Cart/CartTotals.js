import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';

export default function CartTotals({value, history}) {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-8 my-2  mx-auto  text-capitalize text-lg-right text--center">
            <Link to ="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
              >
                Effacez le panier
              </button>
            </Link>
            <h5>
              <span className="text-title">Sous-Total : </span>
              <strong>{cartSubTotal} €</strong>
            </h5>
            <h5>
              <span className="text-title">Taxes : </span>
              <strong>{cartTax} €</strong>
            </h5>
            <h5>
              <span className="text-title">Total : </span>
              <strong>{cartTotal} €</strong>
            </h5>
            <PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
