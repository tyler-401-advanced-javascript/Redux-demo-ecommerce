import React, { useEffect } from 'react';
import classNames from 'classnames';
import './Results.scss';
import { Table, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CategoryList } from '../../store/reducers/category';
import * as actions from '../../store/actions';


function Category({ auth, products, category, deleteItem, changeStock, addCartItem, getAllProducts }) {

  const getProducts = () => {
    getAllProducts();
  }

  //on component render, get all products. 
  useEffect(() => getProducts(), []) //eslint-disable-line

  const handleDelete = item => {
    console.log('deleted an item');
    deleteItem(item);
  };

  const handleStock = (item, e) => {
    e.preventDefault();
    console.log('handled the stock change');
    const newStock = e.target.firstChild.value;
    if (newStock >= 0) changeStock({ item, newStock: e.target.firstChild.value, token: auth.user.token });
    else alert('Stock must be zero or more');
  };

  const handleAddCartItem = (item, e) => {
    e.preventDefault();
    console.log('got here');
    const numberNewItems = parseInt(e.target.firstChild.value);
    if (numberNewItems > 0) addCartItem(item, numberNewItems);
    else alert('Cannot add zero items to cart');
  };



  return (
    <Table size="sm" bordered>
      <thead>
        <tr>
          <th>Name, {category}</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Change Stock</th>
          <th>Add</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, i) => (
          <tr key={i} className={classNames('', { outOfStock: item.stock === '0' })}>
            <th>{item.name}</th>
            <th>{item.category}</th>
            <th>{item.description}</th>
            <th>{item.price}</th>
            <th>{item.stock}</th>
            <th>
              <Form key={item.name} onSubmit={e => handleStock(item, e)}>
                <Form.Control
                  as="input"
                  type="number"
                  name="stock"
                  min={0}
                  defaultValue={item.stock}
                />
              </Form>
            </th>
            <th>
              <Form onSubmit={e => handleAddCartItem(item, e)}>
                <Form.Control
                  type="number"
                  min={0}
                  max={item.stock}
                  defaultValue={1}
                  style={{ width: '40%', display: 'inline' }}
                />
                <Button type="submit" variant="outline-primary" style={{marginInlineStart: '10px'}}>
                  Cart++
                </Button>
              </Form>
            </th>
            <th>
              <Button variant="outline-danger" onClick={() => handleDelete(item)}>
                Delete
              </Button>
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const mapStateToProps = state => {
  return {
    products:
      state.category === CategoryList.Filter.ALL
        ? state.products
        : state.products.filter(item => item.category === state.category),
    category: state.category,
    auth: state.auth
  };
};

const mapDispatchToProps = {
  changeStock: actions.changeStock,
  deleteItem: actions.deleteItem,
  addCartItem: actions.addCartItem,
  getAllProducts: actions.getAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
