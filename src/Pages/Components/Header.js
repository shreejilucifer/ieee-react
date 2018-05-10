import React, { Component } from 'react';

/* Images */
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';

class Header extends Component {

  render() {
    return (
      <div>
        <header>
  <nav className="navbar navbar-default bootsnav navbar-fixed-top header-light bg-transparent nav-box-width white-link">
    <div className="container nav-header-container">
      <div className="row">
        <div className="col-md-2 col-xs-5">
          <a href="/" title="IEEE ADIT Student Branch" className="logo">
          <img src={logo} data-at2x="/images/logo.png" className="logo-dark" alt="IEEE ADIT Student Branch" />
          <img src={logoWhite} data-at2x="/images/logo-white.png" alt="IEEE ADIT Student Branch" className="logo-light default" />
        </a>
        </div>
        <div className="col-md-7 col-xs-2 width-auto pull-right accordion-menu">
          <button type="button" className="navbar-toggle collapsed pull-right" data-toggle="collapse" data-target="#navbar-collapse-toggle-1">
            <span className="sr-only">toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="navbar-collapse collapse pull-right" id="navbar-collapse-toggle-1">
            <ul className="nav navbar-nav navbar-left panel-group no-margin alt-font font-weight-700">
              <li><a href="#home" title="Home" className="inner-link">Home</a></li>
              <li><a href="#motto" title="Motto" className="inner-link">Motto</a></li>

              <li><a href="#chapters" title="IEEE Chapters" className="inner-link">IEEE Chapters</a></li>
              <li><a href="#events" title="Events" className="inner-link">Events</a></li>
              <li><a href="achievements.pdf" title="Achievements" class="inner-link" rel="noopener noreferrer" target="_blank">Achievements</a></li>
              <li><a href="#contact" title="Contact" className="inner-link">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-xs-5 width-auto">
          <div className="header-social-icon xs-display-none">
            <a href="https://in.linkedin.com/in/adit-sb-ieee-b2a431141" rel="noopener noreferrer" title="LinkedIn" target="_blank"><i className="fa fa-linkedin" /></a>
            <a href="https://www.instagram.com/adit_sb_ieee/" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="fa fa-instagram" /></a>
            <a href="https://facebook.com/ADITIEEESB/" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="fa fa-facebook" /></a>
            <a href="https://twitter.com/aditsbieee" rel="noopener noreferrer" title="Twitter" target="_blank"><i className="fa fa-twitter" /></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

      </div>
    );
  }

}

export default Header;
