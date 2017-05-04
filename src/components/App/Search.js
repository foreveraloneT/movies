import React from 'react'
import PropTypes from 'prop-types'
import '../../theme/elements.css'

const searchInputStyle = {
  "backgroundColor" : "#AB5440",
  "color": "white",
  "border": "0px",
}

const seachBtnStyle = {
  "backgroundColor" : "#AB5440",
  "color": "white",
  "borderColor": "#AB5440",
}

export const Search = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control no-focus white-placeholder" placeholder="Nerd Search" style={searchInputStyle} />
      <span className="input-group-btn">
        <button className="btn btn-default no-focus" type="button" style={seachBtnStyle}><span className="glyphicon glyphicon-search" style= {{opacity:"0.7"}}></span></button>
      </span>
    </div>
  )
}

export default Search
