import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as RBNavbar } from 'react-bootstrap';
import './styles.css';

const Navbar = ({ onClick }) => {
  return (
    <RBNavbar collapseOnSelect>
      <RBNavbar.Header>
        <RBNavbar.Brand>
          <a onClick={() => onClick()}>Job Board</a>
        </RBNavbar.Brand>
        <RBNavbar.Toggle />
      </RBNavbar.Header>
    </RBNavbar>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navbar;
