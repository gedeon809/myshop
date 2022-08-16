import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import { signOutUser } from '../../utils/firebase/firebaseUtils';
import CardIcon from '../../components/card-icon/CardIcon';
import CardDropdown from '../../components/card-dropdown/CardDropdown';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCardOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
