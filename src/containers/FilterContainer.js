import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.visibilityFilter,
    own: ownProps.filter,
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchVisibleFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
