import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3 mb-5">404 Erreur</h1>
            <h2 className="mb-5 mb-md-3 mb-lg-0">Page non trouvée</h2>
            <h3>
              La requête d'URL <span className="text-danger">{this.props.location.pathname}</span>{" "}n'a pas été trouvée !
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
