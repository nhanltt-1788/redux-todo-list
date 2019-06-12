import React, { Component } from 'react'
import FilterContainer from '../containers/FilterContainer'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constant/index'

class FilterList extends Component {
  render() {
    return (
      <div>
        <span>Filter: </span>
        <FilterContainer filter={SHOW_ALL} >All</FilterContainer>
        <FilterContainer filter={SHOW_ACTIVE} >Active</FilterContainer>
        <FilterContainer filter={SHOW_COMPLETED} >Completed </FilterContainer>
      </div>
    )
  }
}

export default FilterList
