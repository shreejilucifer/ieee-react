import React, { Component } from 'react';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

class WebTeam extends Component {

  render() {
    return (
      <div>
        <div>
  <header>
    <nav className="navbar navbar-default bootsnav navbar-fixed-top header-light bg-transparent nav-box-width white-link">
      <div className="container nav-header-container">
        <div className="row">
          <div className="col-md-2 col-xs-5">
            <a href="./" title="IEEE ADIT Student Branch" className="logo"><img src="./images/logo.png" data-at2x="images/logo.png" className="logo-dark" alt="IEEE ADIT Student Branch" /><img src="./images/logo-white.png" data-at2x="images/logo-white.png" alt="IEEE ADIT Student Branch" className="logo-light default" /></a>
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
                <li><a href="./" title="Home" className="inner-link">Home</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-xs-5 width-auto">
            <div className="header-social-icon xs-display-none">
              <a href="https://in.linkedin.com/in/adit-sb-ieee-b2a431141" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
              <a href="https://www.instagram.com/adit_sb_ieee/" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
              <a href="https://facebook.com/ADITIEEESB/" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
              <a href="https://twitter.com/aditsbieee" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <section className=" wow fadeIn parallax xs-background-image-center padding-nineteen-bottom xs-padding-50px-bottom" data-stellar-background-ratio="0.5" style={{background: '#282828', paddingBottom: 130}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col text-center last-paragraph-no-margin">
          <h5 className="alt-font font-weight-700 text-extra-dark-gray margin-15px-bottom text-uppercase" style={{color: '#fff'}}>Web Team</h5>
          <p className="width-90 margin-lr-auto xs-width-100 xs-no-margin-bottom" style={{color: '#fff'}}>Web-Master: Shreeji Pedhadiya (160010116054@adit.ac.in)<br />Developer: Viraj Patel (170010116041@adit.ac.in)</p>
        </div>
      </div>
    </div>
  </section>
  <ContactSection />
  <Footer />
</div>

      </div>
    );
  }

}

export default WebTeam;
