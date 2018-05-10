import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WIEChapter extends Component {

  render() {
    return (
      <div>
        <section className="no-padding wow fadeIn bg-extra-dark-gray">
  <div className="container-fluid no-padding">
    <div className="row equalize no-margin">
      <div className="col-md-6 col-sm-12 col-xs-12 display-table wow fadeInRight last-paragraph-no-margin sm-text-center">
        <div className="display-table-cell vertical-align-middle padding-fifteen-all md-padding-ten-all sm-padding-90px-all xs-text-center xs-no-padding-lr xs-padding-40px-tb">
          <span className="text-medium margin-10px-bottom display-block alt-font">IEEE WIE at a Glance!</span>
          <h4 className="alt-font text-light-gray">IEEE Women in Engineering Affinity Group ADIT</h4>
          <p className="text-extra-large width-85 md-width-100">IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.</p>
          <p className="width-85 md-width-100">Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.</p>
          <Link to="/wie" className="btn btn-small margin-35px-top btn-white">Learn more about WIE</Link>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12 position-relative sm-height-500px xs-height-350px cover-background wow fadeInLeft" style={{backgroundImage: 'url("../images/ieee-wie-background.jpg")'}}>
        <div className="opacity-extra-medium bg-extra-dark-gray" />
        <div className="bg-white width-50 text-center text-white padding-ten-all absolute-middle-center z-index-5 md-width-70 xs-width-85 xs-padding-twelve-tb xs-padding-five-lr">
          <span className="special-char-medium text-deep-pink absolute-middle-center top-0 position-absolute fa fa-quote-left" />
          <div className="font-weight-300 no-margin-bottom"><img src="../images/ieee-wie-logo.png" alt="wielogo"/></div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }

}

export default WIEChapter;
