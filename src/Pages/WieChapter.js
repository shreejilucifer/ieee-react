import React, { Component } from 'react';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

class WieChapter extends Component {

  render() {
    return (
      <div>
        <div>
  <header>
    <nav className="navbar navbar-default bootsnav navbar-fixed-top header-light bg-transparent nav-box-width white-link">
      <div className="container nav-header-container">
        <div className="row">
          <div className="col-md-2 col-xs-5">
            <a href="./" title="IEEE ADIT Student Branch" className="logo"><img src="./images/logo.png" data-at2x="images/logo@2x.png" className="logo-dark" alt="IEEE ADIT Student Branch" /><img src="./images/logo-white.png" data-at2x="images/logo-white@2x.png" alt="IEEE ADIT Student Branch" className="logo-light default" /></a>
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
                <li><a href="#overview" title="Overview" className="inner-link">Overview</a></li>
                <li><a href="#about" title="About" className="inner-link">About</a></li>
                <li><a href="#motto" title="Motto" className="inner-link">Motto</a></li>
                <li><a href="#faq" title="FAQ" className="inner-link">FAQ</a></li>
                <li><a href="achievements.pdf" title="Achievements" className="inner-link" target="_blank" rel="noopener noreferrer">Achievements</a></li>
                <li><a href="#contact" title="Contact" className="inner-link">Contact</a></li>
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
  <section id="home" className="no-padding parallax mobile-height wow fadeIn" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("images/ieee-wie-bg.png")'}}>
    <div className="opacity-full bg-black" />
    <div className="container position-relative full-screen">
      <div className="slider-typography text-center">
        <div className="slider-text-middle-main">
          <div className="slider-text-middle">
            <div className="text-bottom-line border-color-deep-pink margin-25px-bottom" />
            <h1 className="text-white alt-font font-weight-700">Women In Engineering<br />Affinity Group</h1>
            <span className="width-60 center-col text-extra-large display-block  margin-20px-top line-height-30 xs-width-90">IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests to a career in engineering.</span>
            <div className="down-section text-center"><a href="#overview" className="inner-link"><i className="ti-arrow-down icon-extra-small text-white bg-deep-pink padding-15px-all xs-padding-10px-all border-radius-100" /></a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="overview" className="wow fadeIn big-section">
    <div className="container">
      <div className="row">
        <div className="col-md-11 center-col text-center margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom wow fadeInUp">
          <h6 className="alt-font text-extra-dark-gray">IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering.</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom fadeInUp">
          <div className="col-md-12 padding-30px-lr">
            <ul className="list-style-6">
              <li className="text-small text-uppercase text-black font-weight-500 line-height-22">Member</li>
              <li>54</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 center-col text-center wow fadeInUp" data-wow-delay="0.4s">
          <a href="http://wie.ieee.org/" className="btn btn-transparent-dark-gray btn-large">Visit Women in Engineering Website</a>
        </div>
      </div>
    </div>
  </section>
  <section id="about" className="big-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 sm-margin-5px-bottom wow fadeInLeft" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
          <div className="separator-line-horrizontal-full bg-deep-pink margin-20px-bottom sm-display-none" />
          <span className="text-uppercase alt-font text-medium-gray letter-spacing-1 font-weight-600 text-small">About</span>
        </div>
        <div className="col-lg-8 col-md-7 col-md-offset-2 last-paragraph-no-margin">
          <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-30px-bottom clear-both">About Women in Engineering</h5>
          <p className="text-medium line-height-30">IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering.</p>
          <p className="text-medium line-height-30">IEEE Women in Engineering (WIE) provides members with the opportunity to network at a local level through IEEE WIE affinity groups. Opportunities include coordinating events, mentoring, or serving as an officer. Currently, there are over 800 IEEE WIE Affinity Groups worldwide that organize and host diverse activities including guest speakers, workshops, and/or seminars. If you are interested in volunteering with IEEE WIE, the best place to get started is with your local  IEEE WIE Affinity Group.If there is no Affinity Group in your area, you can start one in your Section or Student Branch by recruiting six other IEEE Members willing to be part of the Affinity Group and then submitting a petition.</p>
        </div>
      </div>
    </div>
  </section>
  <section id="motto" className="wow fadeIn border-top border-width-1 border-color-medium-gray big-section" style={{visibility: 'visible', animationName: 'fadeIn'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 sm-margin-5px-bottom wow fadeInLeft" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
          <div className="separator-line-horrizontal-full bg-deep-pink margin-20px-bottom sm-display-none" />
          <span className="text-uppercase alt-font text-medium-gray letter-spacing-1 font-weight-600 text-small">Motto</span>
        </div>
        <div className="col-lg-8 col-md-7 col-md-offset-2 last-paragraph-no-margin">
          <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-30px-bottom clear-both">WIE Vision</h5>
          <p className="text-medium line-height-30">WIE affinity group aims to nurture and support diversity in engineering. Our view is holistic – peace and satisfaction can be gained through a balance of career, lifestyle and community. We also aim to work with other groups with similar goals.</p>
          <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-30px-bottom clear-both">WIE Goal</h5>
          <p className="text-medium line-height-30">Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.</p>
        </div>
      </div>
    </div>
  </section>
  <section id="exe-com" className="wow fadeIn border-top border-width-1 border-color-medium-gray" style={{visibility: 'visible', animationName: 'fadeIn'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom">
          <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">IEEE ADIT STUDENT BRANCH WIE Affinity Group EXE-COM</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp" style={{visibility: 'visible', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/wie-affinity-group-chair.jpg" alt="Some-Data"data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Tanvi Makadia</div>
                <div className="text-extra-small text-uppercase text-medium-gray">WIE Affinity Group Chair</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Tanvi Makadia is currently Chair-Person of IEEE ADIT Student Branch WIE Affinity Group.</span>
                <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/wie-affinity-group-vice-chair.jpg" alt="Some-Data"data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Jalak Gajera</div>
                <div className="text-extra-small text-uppercase text-medium-gray">WIE Affinity Group Vice-Chair</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Jalak Gajera is currently Vice-Chair of IEEE ADIT Student Branch WIE Affinity Group.</span>
                <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp" style={{visibility: 'visible', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/wie-affinity-group-secretary.jpg" alt="Some-Data"data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Maitri Rana</div>
                <div className="text-extra-small text-uppercase text-medium-gray">WIE Affinity Group Secretary</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Maitri Rana is currently Secretary of IEEE ADIT Student Branch WIE Affinity Group.</span>
                <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
  <section id="faq" className="bg-light-gray border-none no-padding wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
    <div className="container-fluid">
      <div className="row equalize sm-equalize-auto">
        <div className="col-md-12 col-sm-12 col-xs-12 display-table wow fadeInLeft" style={{visibility: 'visible', animationName: 'fadeInLeft', height: 711}}>
          <div className="display-table-cell-vertical-middle padding-thirteen-all md-padding-ten-all sm-padding-six-all xs-padding-50px-tb xs-no-padding-lr">
            <h5 className="alt-font text-extra-dark-gray sm-text-center margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom font-weight-500"><span className="font-weight-300 display-block xs-margin-15px-bottom" />Frequently Asked Questions</h5>
            <div className="panel-group accordion-style2" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">01</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">What is a IEEE Technical Chapter?</span>
                      <i className="fa fa-angle-up pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">An IEEE Technical Chapter is the subunit of IEEE Student Branch formed under the branch. Currently IEEE have more than 38 Technical Societies and Affinity Groups.</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">02</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">How can I avail membership of IEEE Women in Engineer?</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">To avail membership of IEEE Women in Engineer you must be an active IEEE Member.</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">03</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">What are the benefits of joining IEEE Women in Engineer?</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">IEEE Women in Engineering  members can meet colleagues with similar interests in promoting women in engineering and technology and participate in activities that support the IEEE WIE mission. IEEE WIE offers a wide array of benefits and discounts to its members, including Discounted registration to the IEEE WIE Annual International Leadership Conference, Leadership Summits, and other IEEE WIE events, Access to IEEE WIE, award-winning magazine 2 issues/yr, Access to IEEE WIE Newsletter, IEEE WIE awards, scholarships, and travel grants, Participate in exclusive IEEE WIE contests, Volunteer opportunities.
                    Appointments to IEEE WIE Committee
                    Member Grade advancement support</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">04</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">How can I form a new IEEE Women in Engineer Affinity Group?</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                  <div className="panel-body">To form a Student Branch Affinity Group, complete the <a href="https://www.ieee.org/communities/forms_petitions.html" target="_blank" rel="noopener noreferrer">Branch Affinity Group petition form</a> and submit it to IEEE Member and Geographic Activities (MGA). The faculty advisor is no longer required to be a IEEE WIE member but must be an IEEE member (of Member Grade or higher). IEEE Member and Geographic Activities (MGA) will obtain the appropriate approvals and will notify you once the formation is completed. To form an Affinity Group, complete the <a href="https://www.ieee.org/communities/forms_petitions.html" target="_blank" rel="noopener noreferrer">Affinity Group Petition Form</a> (DOC, 100KB) and submit it to MGA. MGA will obtain the appropriate approvals and will notify you once the formation is completed.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ContactSection />
  <Footer />
  <a className="scroll-top-arrow" href=""><i className="ti-arrow-up" /></a>
</div>

      </div>
    );
  }

}

export default WieChapter;
