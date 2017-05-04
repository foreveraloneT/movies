import React from 'react'
import head from '../../resources/img/header13.jpg'

export const Header = () => {
  return (
    <div>
      <img className="img-responsive" src={head} />
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
            <a className="navbar-brand" href="#">LOGO SPACE</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right hidden-xs">
              <li><a href="#"><span className="glyphicon glyphicon-home"></span></a></li>
              <li><a href="#"><span className="glyphicon glyphicon-question-sign"></span></a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right visible-xs">
              <li className="text-center"><a href="#"><h4><b>Home</b></h4></a></li>
              <li className="text-center"><a href="#"><h4><b>About</b></h4></a></li>
            </ul>

            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                  </span>
                </div>
              </div>
            </form>

          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header
