import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="footer-classic-dark bg-extra-dark-gray padding-five-bottom xs-padding-30px-bottom">
  <div className="bg-dark-footer padding-50px-tb xs-padding-30px-tb">
    <div className="container">
      <div className="row equalize xs-equalize-auto">
        <div className="col-md-4 col-sm-5 col-xs-12 text-center alt-font display-table xs-text-center xs-margin-15px-bottom">
          <div className="display-table-cell vertical-align-middle">
            IEEE ADIT Student Branch
          </div>
        </div>
        <div className="col-md-4 col-sm-2 col-xs-12 text-center display-table xs-margin-10px-bottom">
          <div className="display-table-cell vertical-align-middle">
            <a href="index.html"><img className="footer-logo" src="images/logo-white.png" data-at2x="images/logo-white@2x.png" alt="IEEE ADIT Student Branch" /></a>
          </div>
        </div>
        <div className="col-md-4 col-sm-5 col-xs-12 col-xs-12 text-center display-table xs-text-center">
          <div className="display-table-cell vertical-align-middle">
            <span className="alt-font margin-20px-right">On social networks</span>
            <div className="social-icon-style-8 display-inline-block vertical-align-middle">
              <ul className="small-icon no-margin-bottom">
                <li><a className="linkedin text-white" href="https://in.linkedin.com/in/adit-sb-ieee-b2a431141" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                <li><a className="instagram text-white" href="https://www.instagram.com/adit_sb_ieee/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram no-margin-right"/></a></li>
                <li><a className="facebook text-white" href="https://facebook.com/ADITIEEESB/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"/></a></li>
                <li><a className="twitter text-white" href="https://twitter.com/aditsbieee" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-widget-area padding-five-top padding-30px-bottom xs-padding-30px-top">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-6 col-xs-12 widget sm-margin-30px-bottom xs-text-center">
          <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">About ADIT(A. D. Patel Institute of Technology)</div>
          <p className="text-small width-95 xs-width-100 no-margin">A. D. Patel Institute of Technology (ADIT) is a degree engineering college established by in 2000 in accreditation with Gujarat Technological University under the management of Charutar Vidhya Mandal (CVM). The college has a 40-acre campus developed by CVM as New Vallabh Vidhyanagar. ADIT is the first Technical Institute in India to be ISO 9001:2015 Certified</p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 widget sm-margin-30px-bottom xs-text-center">
          <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-15px-bottom font-weight-600">Subscribe Newsletter</div>
          <p className="text-small width-90 xs-width-100">Subscribe to Newsletter to get all the updates from IEEE ADIT Student Branch to get all update from IEEE ADIT SB directly into your INBOX.</p>
          <div id="subscribe">
            <form action="php/notify-me.php" id="notifyMe" method="POST">
              <div className="form-group">
                <div className="controls">
                  <div className="position-relative newsletter width-95">
                    <div id="success-subscribe-newsletter" className="no-margin-lr" />
                    <input type="text" id="mail-sub" name="email" className="bg-transparent text-small no-margin border-color-medium-dark-gray" placeholder="Enter your email..." />
                    <button id="button-subscribe-newsletter" type="submit" className="btn btn-arrow-small position-absolute border-color-medium-dark-gray"><i className="fa fa-caret-right no-margin-left" /></button>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </form>
            <div className="block-message"><div className="message"><p className="notify-valid" /></div></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 widget border-0 padding-45px-left sm-padding-15px-left sm-no-border-right sm-margin-30px-bottom xs-text-center" style={{height: 199}}>
          <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-10px-bottom font-weight-600">Additional Links</div>
          <ul className="list-unstyled">
            <li><a className="text-small" href="/">Home - IEEE ADIT Student Branch</a></li>
            <li><a className="text-small" href="./#contact">Contact - IEEE ADIT Student Branch</a></li>
            <li><Link className="text-small" to="/webteam">Web Team - IEEE ADIT Student Branch</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="footer-bottom border-top border-color-medium-dark-gray padding-30px-top">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 text-left text-small xs-text-center">A. D. Patel Institute of Technology</div>
        <div className="col-md-6 col-sm-6 col-xs-12 text-right text-small xs-text-center">© 2018 Website Developed and Maintained by <a href="web-team.html" target="_blank" rel="noopener noreferrer" title="IEEE ADIT SB - Web Team">IEEE ADIT SB - Web Team</a></div>
      </div>
    </div>
  </div>
</footer>

      </div>
    );
  }

}

export default Footer;
