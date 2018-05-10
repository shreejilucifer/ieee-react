import React, { Component } from 'react';

class ParallaxSection extends Component {

  render() {
    return (
      <div>
        <section className="parallax wow fadeIn" data-stellar-background-ratio="0.3" style={{backgroundImage: 'url("../images/ieee-adit-sb.jpg")', visibility: 'visible', animationName: 'fadeIn'}}>
  <div className="opacity-light bg-black" />
  <div className="container position-relative">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 text-center center-col last-paragraph-no-margin">
        <h4 className="alt-font text-white margin-15px-bottom xs-margin-20px-bottom">IEEE ADIT Student Branch</h4>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }

}

export default ParallaxSection;
