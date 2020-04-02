import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { emptyCart, changeView } from '../../store/actions'
import { Views } from '../../store/reducers/views'


const CartCount = function({ cart, emptyCart, changeView }) {
  function handleEmptyCart() {
    emptyCart();
  }

  return (
    <div>
      <Button variant="primary" className="cartButton" onClick={() => changeView(Views.CART)}>
        Cart: {cart.totalItems}
      </Button>
      <Button variant="outline-secondary" onClick={handleEmptyCart}>Empty Cart :(</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { emptyCart, changeView })(CartCount);
