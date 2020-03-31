import React from 'react';
import { Filter, filterBy } from '../../store/categoryFilterer'
import { connect } from 'react-redux'

function Select(props) {

  return (
    <select onChange={(e) => e.target.value === 'none' ? null : props.filterBy(e.target.value)}>
      <option selected value={'none'}>Select Category</option>
      <option value={Filter.ALL}>-</option>
      <option value={Filter.TOOL}>Tools</option>
      <option value={Filter.TOY}>Toys</option>
      <option value={Filter.PERSON}>People</option>
    </select>
  )
}

const mapStateToProps = (state) => {
  return { categoryFilterer: state.categoryFilterer }
}

const mapDispatchToProps = { filterBy }


export default connect(mapStateToProps, mapDispatchToProps)(Select)