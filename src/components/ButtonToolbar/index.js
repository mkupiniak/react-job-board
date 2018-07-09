import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar as RBButtonToolbar } from 'react-bootstrap';
import './styles.css';

const ButtonToolbar = ({ items, onClick }) => (
  <div className="toolbar">
    <RBButtonToolbar>
      {items.map(item => (
        <Button bsSize="small" key={item} onClick={() => onClick(item)}>
          {item}
        </Button>
      ))}
    </RBButtonToolbar>
  </div>
);

ButtonToolbar.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default ButtonToolbar;
