import React from 'react';
import { connect } from 'react-redux';
import { CategoryList } from '../../store/reducers/category';
import { changeCategory } from '../../store/actions';

function Select({ changeCategory, category }) {
  return (
    <select value={category} onChange={e => changeCategory(e.target.value)}>
      <option value={CategoryList.Filter.ALL}>
        Select Category
      </option>
      <option value={CategoryList.Filter.TOOL}>Tools</option>
      <option value={CategoryList.Filter.TOY}>Toys</option>
      <option value={CategoryList.Filter.PERSON}>People</option>
    </select>
  );
}

//we dont need mapStateToProps becuase this component doesnt give a shit what the state is! It only sets the state, so we pull in mapDISPATCHtoprops. (it will be dispatching actions)
const mapStateToProps = state => ({ category: state.category });

export default connect(mapStateToProps, { changeCategory })(Select);
