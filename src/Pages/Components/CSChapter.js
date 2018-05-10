import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CSChapter extends Component {

  render() {
    return (
      <div>
        <section id="chapters" className="no-padding wow fadeIn bg-extra-dark-gray">
  <div className="container-fluid no-padding">
    <div className="row equalize no-margin">
      <div className="col-md-6 col-sm-12 col-xs-12 position-relative sm-height-500px xs-height-350px cover-background wow fadeInLeft" style={{backgroundImage: 'url("../images/ieee-cs-background.jpg")'}}>
        <div className="opacity-extra-medium bg-extra-dark-gray" />
        <div className="bg-white width-50 text-center text-white padding-ten-all absolute-middle-center z-index-5 md-width-70 xs-width-85 xs-padding-twelve-tb xs-padding-five-lr">
          <span className="special-char-medium text-deep-pink absolute-middle-center top-0 position-absolute fa fa-quote-left" />
          <div className="font-weight-300 no-margin-bottom"><img src="../images/ieee-cs-logo.png" alt="cslogo"/></div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12 display-table wow fadeInRight last-paragraph-no-margin sm-text-center">
        <div className="display-table-cell vertical-align-middle padding-fifteen-all md-padding-ten-all sm-padding-90px-all xs-text-center xs-no-padding-lr xs-padding-40px-tb">
          <span className="text-medium margin-10px-bottom display-block alt-font">IEEE CS at a Glance!</span>
          <h4 className="alt-font text-light-gray">IEEE Computer Society Chapter ADIT</h4>
          <p className="text-extra-large width-85 md-width-100">The scope of the Society shall encompass all aspects of theory, design, practice, and application relating to computer and information processing science and technology.</p>
          <p className="width-85 md-width-100">The IEEE Computer Society is the world's leading membership organization dedicated to computer science and technology. Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students.</p>
          <Link to="/cschapter" className="btn btn-small margin-35px-top btn-white">Learn more about CS</Link>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }

}

export default CSChapter;
