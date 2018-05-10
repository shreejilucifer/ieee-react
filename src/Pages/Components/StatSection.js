import React, { Component } from 'react';

class StatSection extends Component {

  render() {
    return (
      <div>
        <section className="wow fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left sm-margin-ten-bottom xs-margin-50px-bottom xs-padding-15px-left wow fadeInRight">
                <div className="feature-box-5 position-relative">
                  <i className="icon-profile-male text-medium-gray icon-extra-medium top-6" />
                  <div className="feature-content">
                    <h6 className="display-block text-extra-dark-gray font-weight-500 alt-font no-margin-bottom xs-margin-5px-bottom timer" data-speed={3000} data-to={56}>56</h6>
                    <span className="text-small text-uppercase position-relative top-minus4">IEEE Members</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left xs-margin-50px-bottom xs-padding-15px-left wow fadeInRight" data-wow-delay="0.4s">
                <div className="feature-box-5 position-relative">
                  <i className="icon-gears text-medium-gray icon-extra-medium top-6" />
                  <div className="feature-content">
                    <h6 className="display-block text-extra-dark-gray font-weight-500 alt-font no-margin-bottom xs-margin-5px-bottom timer" data-speed={3000} data-to={17}>17</h6>
                  </div>
                  <span className="text-small text-uppercase position-relative top-minus4">Seminars since 2017</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left xs-padding-15px-left wow fadeInRight" data-wow-delay="0.6s">
                <div className="feature-box-5 position-relative">
                  <i className="icon-tools-2 text-medium-gray icon-extra-medium top-6" />
                  <div className="feature-content">
                    <h6 className="display-block text-extra-dark-gray font-weight-500 alt-font no-margin-bottom xs-margin-5px-bottom timer" data-speed={3000} data-to={7}>7</h6>
                    <span className="text-small text-uppercase position-relative top-minus4">Workshops since 2017</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 sm-padding-twelve-left sm-margin-ten-bottom xs-margin-50px-bottom xs-padding-15px-left wow fadeInRight" data-wow-delay="0.2s">
                <div className="feature-box-5 position-relative">
                  <i className="icon-calendar text-medium-gray icon-extra-medium top-6" />
                  <div className="feature-content">
                    <h6 className="display-block text-extra-dark-gray font-weight-500 alt-font no-margin-bottom xs-margin-5px-bottom timer" data-speed={3000} data-to={24}>24</h6>
                    <span className="text-small text-uppercase position-relative top-minus4">Total Events since 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default StatSection;
