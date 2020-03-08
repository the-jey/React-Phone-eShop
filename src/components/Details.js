import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './style/Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">

              {/* Product Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              {/* Product Infos */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="Produit" className="img-fluid" />
                </div>

                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Modèle : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Créé par : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>Prix : {price}<span>€</span></strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Quelques infos à propos du produit :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to ="/">
                      <ButtonContainer>
                        Revenir aux produits
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                      value.addToCart(id)
                    }}>
                      {inCart ? 'Dans le panier' : 'Ajouter au panier'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
