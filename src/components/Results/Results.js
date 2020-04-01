import React from 'react';
import classNames from 'classnames';
import './Results.scss'
import { Table, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CategoryList } from '../../store/reducers/category';
import { changeStock, deleteItem } from '../../store/actions';

function Category({ products, category, deleteItem, changeStock }) {
  const handleDelete = item => {
    console.log('deleted an item');
    deleteItem(item);
  };

  const handleStock = (item, e) => {
    e.preventDefault();
    console.log('handled the stock change');
    const newStock = e.target.firstChild.value;
    if (newStock >= 0) changeStock({ item, newStock: e.target.firstChild.value });
    else alert('Stock must be zero or more');
  };

  return (
    <Table variant="sm" bordered>
      <thead>
        <tr>
          <th>Name, {category}</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Change Stock</th>
          <th></th>
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
                  defaultValue={item.stock}
                />
              </Form>
            </th>
            <th>
              <Button variant="secondary" onClick={() => handleDelete(item)}>
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
    category: state.category
  };
};

export default connect(mapStateToProps, { changeStock, deleteItem })(Category);
