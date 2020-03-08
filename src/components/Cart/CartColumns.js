import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Produit</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Nom du produit</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Prix</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantité</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Supprimer</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  )
}
