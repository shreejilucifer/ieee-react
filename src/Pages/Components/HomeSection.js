import React, { Component } from 'react';


class HomeSection extends Component {

  render() {
    return (
      <div>
        <section id="home" className="no-padding parallax mobile-height wow fadeIn" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("../images/background.jpg")'}}>
  <div className="opacity-extra-medium bg-extra-dark-gray" />
  <div className="container position-relative full-screen">
    <div className="slider-typography text-center">
      <div className="slider-text-middle-main xs-padding-15px-lr">
        <div className="slider-text-middle">
          <img src="../images/background-text.png"  alt="bgtext"/>
          <div className="down-section text-center"><a href="#motto" className="inner-link"><i className="ti-arrow-down icon-extra-small text-white bg-deep-pink padding-15px-all xs-padding-10px-all border-radius-100" /></a></div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }

}

export default HomeSection;
