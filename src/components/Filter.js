import React, { Component } from 'react'

class Filter extends Component {
  handleClickFilter = () => {
    this.props.dispatchVisibleFilter();
  }

  render() {
    const { active} = this.props;
    return (
      <button
          className="mr-3"
          disabled={active}
          onClick={this.handleClickFilter}
        >
          {this.props.children}
        </button>
    )
  }
}

export default Filter
