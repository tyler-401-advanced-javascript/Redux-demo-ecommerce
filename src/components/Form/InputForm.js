import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createItem } from '../../store/actions';
import { CategoryList } from '../../store/reducers/category'

function InputForm({ createItem }) {
  const { register, handleSubmit } = useForm();
  const submitForm = (data, e) => {
    e.target.reset();
    console.log('here is your data: ', data);
    createItem(data);
  };
  //{ name: 'Tyler', displayCategory: 'Person', category: Filter.PERSON, price: 55, description: 'string', stock: 5},

  return (
    <Form variant="sm" onSubmit={handleSubmit(submitForm)}>
      <Form.Control ref={register} type="name" placeholder="Name" name="name" />
      <Form.Control ref={register} as="select" placeholder="Category" name="category">
        {Object.keys(CategoryList).filter(option => option !== CategoryList.ALL).map(option => {
          return <option key={option}>{option}</option>
        })}
      </Form.Control>
      <Form.Control ref={register} type="name" placeholder="Price" name="price" />
      <Form.Control ref={register} type="name" placeholder="Description" name="description" />
      <Form.Control ref={register} type="number" placeholder="Stock" name="stock" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default connect(null, { createItem })(InputForm);
