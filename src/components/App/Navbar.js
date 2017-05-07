import React from 'react'
import { Search } from './Search'
import '../../theme/elements.css'
import { Link } from 'react-router'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const navbarStyle = {
  "border": "1px",
  "borderRadius": "0px",
  "marginBottom": "0px",
}

const refreshPage = () => (
  window.location.reload()
)

const menuStyle = (current, menu) => (
  classNames({
    "text-center": true,
    active: current === menu,
  })
)

export const Navbar = ({
  clickHome,
  clickAbout,
  current,
}) => (
  <nav className='navbar navbar-main' style={navbarStyle}>
    <div className="container">

      <div className="row">
        <div className="col-md-3 col-sm-4">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><b>NERD MOVIES</b></a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <div className="col-md-7 col-sm-6">
            <div className="navbar-search">
              <Search />
            </div>
          </div>

          <ul className="nav navbar-nav visible-xs">
            <li className={menuStyle(current, 'home')}>
              <Link to='/' onClick={() => clickHome()}>
                <b>Home</b>
              </Link>
            </li>
            <li className={menuStyle(current, 'about')}>
              <Link to='/about' onClick={() => clickAbout()}>
                <b>About</b>
              </Link>
            </li>
          </ul>

          <div className="col-md-2 col-sm-2">
            <ul className="nav navbar-nav navbar-right hidden-xs hidden-xs">
              <li className={menuStyle(current, 'home')}>
                <Link to='/' onClick={() => clickHome()} >
                  <span className="glyphicon glyphicon-home navbar-icon"></span>
                </Link>
              </li>
              <li className={menuStyle(current, 'about')}>
                <Link to='/about' onClick={() => clickAbout()} >
                  <span className="glyphicon glyphicon-question-sign navbar-icon"></span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </nav>
)

Navbar.proptypes = {
  clickHome: PropTypes.func.isRequired,
  clickAbout: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
}

export default Navbar


