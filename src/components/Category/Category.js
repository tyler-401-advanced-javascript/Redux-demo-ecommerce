import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { filterBy } from '../../store/categoryFilterer'


function Category(props) {

  return (
    <Table variant="sm" striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>

        </tr>
      </thead>
      <tbody>
        {props.categoryFilterer.products.map(item => (
          <tr key={item.name}>
            <th>{item.name}</th>
            <th>{item.category.toLowerCase()}</th>
            <th>{item.description}</th>
            <th>{item.price}</th>
            <th>{item.stock}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return { categoryFilterer: state.categoryFilterer }
}
const mapDispatchToProps = (dispatch) => {
  return {
    filterBy: (filter) => dispatch(filterBy(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);