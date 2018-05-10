import React, { Component } from 'react';

class ContactSection extends Component {

  render() {
    const uniqueTitle = "";

    return (
      <div>
        <section id="contact" className="wow fadeIn no-padding bg-extra-dark-gray">
  <div className="container-fluid">
    <div className="row equalize sm-equalize-auto">.
      <div className="col-md-6 col-sm-12 col-xs-12 cover-background sm-height-550px xs-height-350px wow fadeIn"><iframe title={uniqueTitle} height="100%" width="100%" frameBorder={0} style={{border: 0, paddingTop: 20}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJKfcthpNNXjkRW0X9u0Mgvq0&key=AIzaSyBRaqD3zNeVwRgLY0y9paElZXOI_R3imkY" allowFullScreen /></div>
      <div className="col-md-6 col-sm-12 col-xs-12 wow fadeIn">
        <div className="padding-eleven-all text-center xs-no-padding-lr">
          <div className="text-medium-gray alt-font text-small text-uppercase margin-5px-bottom xs-margin-three-bottom">Fill out the form and we'll be in touch soon!</div>
          <h5 className="margin-55px-bottom text-white alt-font font-weight-500 text-uppercase sm-margin-30px-bottom xs-margin-15px-bottom">Ready to be a IEEE Member?</h5>
          <div>
              <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/forms/OJnBbm2iUvfopctA2" id="contact-us-button" type="submit" className="btn btn-small btn-deep-pink margin-30px-top sm-margin-10px-top xs-margin-three-top">Contact Us</a>

            <div id="block-answer"><div id="answer" /></div>
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

export default ContactSection;
