import React, { PropTypes } from 'react'
import { Search } from './Search'
import '../../theme/elements.css'

// export const Navbar = () => {
//   return (
//     <nav className="container-fluid">
//       <div className="row">
//         <div className="col-md-2 col-md-offset-1">
//           <a className="navbar-brand nav-link" href="#">Logo Space</a>
//         </div>
//       </div>
//     </nav>
//   )
// }

const navbarStyle = {
  "border": "1px",
  "border-radius": "0px",
}

export const Navbar = () => (
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

          <ul className="nav navbar-nav visible-xs">
            <li className="text-center"><a href="#"><b>Home</b></a></li>
            <li className="text-center"><a href="#"><b>About</b></a></li>
          </ul>

          <div className="col-md-7 col-sm-6">
            <div className="navbar-search">
              <Search />
            </div>
          </div>

          <div className="col-md-2 col-sm-2">
            <ul className="nav navbar-nav navbar-right hidden-xs hidden-xs">
              <li><a href="#"><span className="glyphicon glyphicon-home navbar-icon"></span></a></li>
              <li><a href="#"><span className="glyphicon glyphicon-question-sign navbar-icon"></span></a></li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </nav>
)

export default Navbar