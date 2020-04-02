import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { If } from '../util';

import { changeView, deleteCartItem, updateCartItem } from '../../store/actions';
import { Views } from '../../store/reducers/views';

function Cart({ cart, changeView, deleteCartItem, updateCartItem }) {
  const calculateTotalCost = () => {
    //yep, we used reduce, booyah
    return cart.items.reduce((acc, item) => {
      acc += item.price * item.number;
      return acc;
    }, 0);
  };

  const handleUpdateCartItem = (e, item) => {
    e.preventDefault();
    const newNumber = parseInt(e.target.firstChild.value)
    console.log(newNumber);
    updateCartItem(item, newNumber)
  }

  return (
    <div>
      <Button variant="primary" onClick={() => changeView(Views.MAIN)}>
        Products
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Number</th>
            <th>Remove</th>
          </tr>
        </thead>
        <If condition={cart.items.length !== 0}>
          <tbody>
            {cart.items.map((item, i) => (
              <tr key={i} className="item">
                <th>{item.name}</th>
                <th>{item.category}</th>
                <th>{item.description}</th>
                <th>{item.price}</th>
                <th>{item.stock}</th>
                <th>
                  <Form
                    key={item.name}
                    onSubmit={e => handleUpdateCartItem(e, item)}
                  >
                    <Form.Control
                      as="input"
                      type="number"
                      defaultValue={item.number}
                    />
                  </Form>
                </th>
                <th>
                  <Button variant="outline-danger" onClick={() => deleteCartItem(item)}>
                    Delete
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>
                <h4>Subtotal: {calculateTotalCost()}</h4>
              </th>
              <th>
                <h4>Total Items: {cart.totalItems}</h4>
              </th>
              <th>
                <Button variant="primary">Checkout</Button>
              </th>
            </tr>
          </tfoot>
        </If>

        <If condition={cart.items.length === 0}>
          <h3>There are no items in your cart at this time.</h3>
        </If>
      </Table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, { changeView, deleteCartItem, updateCartItem })(
  Cart
);
