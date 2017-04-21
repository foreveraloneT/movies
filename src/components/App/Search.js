import React, { PropTypes } from 'react'

export const Search = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search..." />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
      </span>
    </div>
  )
}

export default Search
