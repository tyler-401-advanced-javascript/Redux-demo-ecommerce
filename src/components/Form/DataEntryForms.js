import React from 'react';
import { Table } from 'react-bootstrap'
import ItemForm from './InputForm';

function DataEntryForms() {
  return (
    <Table>
      <tr>
        <th>
          <h3>Add Item</h3>
          <ItemForm />
        </th>
        <th>
          <h3>Add Category</h3>
          category form
        </th>
        <th>
          <h3>Another Form</h3>
          another form
        </th>
        <th>
          <h3>Another Form</h3>
          another form
        </th>
      </tr>
    </Table>
  );
}

export default DataEntryForms;
