import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './style/Button';

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt="Logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav aligns-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Produits
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            Mon panier
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

// Styled Components
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`