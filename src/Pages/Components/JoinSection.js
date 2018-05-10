import React, { Component } from 'react';

class JoinSection extends Component {

  render() {
    return (
      <div>
        <div>
  <section className="bg-light-gray border-none no-padding wow fadeIn">
    <div className="container-fluid">
      <div className="row equalize sm-equalize-auto">
        <div className="col-md-6 col-sm-12 col-xs-12 display-table wow fadeInLeft">
          <div className="display-table-cell-vertical-middle padding-thirteen-all md-padding-ten-all sm-padding-six-all xs-padding-50px-tb xs-no-padding-lr">
            <h5 className="alt-font text-extra-dark-gray sm-text-center margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom font-weight-500"><span className="font-weight-300 display-block xs-margin-15px-bottom">Join with our Global Network.</span>Learn About IEEE Membership</h5>
            <div className="panel-group accordion-style2" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">01</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">Gain Expertise and Open Career Doors</span>
                      <i className="fa fa-angle-up pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">IEEE houses an unrivaled network of professionals, experts, and advisors that can help shape your career, offer resources to acquire new skills, advance your professional development, and provide numerous opportunities for involvement, recognition, and reward.</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">02</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">Stay Current and Get Ahead</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">Membership grants you access to the largest library of electrical engineering, computer science, and electronics technical literature as well as the latest technology trends, industry news, and events.</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">03</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">Build a Network</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">Collaborate with IEEE colleagues and member groups, online or in person, to build a support group for your profession, industry, or project.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 cover-background sm-height-500px xs-height-350px wow fadeInRight" style={{background: 'url("../images/ieee-membership.jpg")'}} />
      </div>
    </div>
  </section>
  
</div>

      </div>
    );
  }

}

export default JoinSection;
