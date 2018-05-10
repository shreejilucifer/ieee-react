import React, { Component } from 'react';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

class CsChapter extends Component {

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
              <a href="https://facebook.com/ADITIEEESB/" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"  /></a>
              <a href="https://twitter.com/aditsbieee" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <section id="home" className="no-padding parallax mobile-height wow fadeIn" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("images/ieee-cs-bg.png")'}}>
    <div className="opacity-full bg-black" />
    <div className="container position-relative full-screen">
      <div className="slider-typography text-center">
        <div className="slider-text-middle-main">
          <div className="slider-text-middle">
            <div className="text-bottom-line border-color-deep-pink margin-25px-bottom" />
            <h1 className="text-white alt-font font-weight-700">Computer Society Chapter</h1>
            <span className="width-60 center-col text-extra-large display-block  margin-20px-top line-height-30 xs-width-90">The scope of the Society shall encompass all aspects of theory, design, practice, and application relating to computer and information processing science and technology.</span>
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
          <h6 className="alt-font text-extra-dark-gray">The IEEE Computer Society is the community for technology leaders. As the computing professional's single, unmatched source for technology information, inspiration and collaboration, we are the organization that computing's leaders, innovators, and researchers trust. </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom fadeInUp">
          <div className="col-md-6 padding-30px-lr">
            <ul className="list-style-6">
              <li className="text-small text-uppercase text-black font-weight-500 line-height-22">Member</li>
              <li>47</li>
            </ul>
          </div>
          <div className="col-md-6 padding-30px-lr">
            <ul className="list-style-6">
              <li className="text-small text-uppercase text-black font-weight-500 line-height-22">Approved Date</li>
              <li>01st April 2018</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 center-col text-center wow fadeInUp" data-wow-delay="0.4s">
          <a href="https://www.computer.org" className="btn btn-transparent-dark-gray btn-large">Visit Computer Society Website</a>
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
          <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-30px-bottom clear-both">About Computer Society</h5>
          <p className="text-medium line-height-30">The IEEE Computer Society is the world's leading membership organization dedicated to computer science and technology. Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students.</p>
          <p className="text-medium line-height-30">The IEEE Computer Society sponsors more than 200 technical conferences and events each year, including the industry-oriented "Rock Stars" series, all over the world, aimed at research and industry professionals. Our publications are peer-reviewed, indexed, and authored by technology thought leaders worldwide, and include 17 scholarly journals and 13 magazines featuring the latest technology trends. We also offer cutting-edge products such as the myComputer app (available for iOS or Android), that provide unprecedented user-driven access to our content, and our Digital Library with more than 550,000 articles and papers spanning the full spectrum of computer science and technology.</p>
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
          <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-30px-bottom clear-both">Computer Society Vision</h5>
          <p className="text-medium line-height-30">To be the leading provider of technical information, community services, and personalized services to the world's computing professionals.</p>
          <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-30px-bottom clear-both">Computer Society Goal</h5>
          <p className="text-medium line-height-30">Be essential to the global technical community and computer professionals everywhere and be universally recognized for the contributions of technical professionals in developing and applying technology to improve global conditions.</p>
        </div>
      </div>
    </div>
  </section>
  <section id="exe-com" className="wow fadeIn border-top border-width-1 border-color-medium-gray" style={{visibility: 'visible', animationName: 'fadeIn'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom">
          <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase margin-15px-bottom">IEEE ADIT STUDENT BRANCH CS Chapter EXE-COM</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp" style={{visibility: 'visible', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/cs-chapter-faculty-advisor.jpg" alt="Some-Data" data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Prof. Sudhir Vegad</div>
                <div className="text-extra-small text-uppercase text-medium-gray">CS Chapter Advisor</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Prof. Sudhir Vegad is currently Faculty Advisor of IEEE ADIT Student Branch CS Chapter.</span>
                <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/cs-chapter-chair.jpg" alt="Some-Data" data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Aashish Arora</div>
                <div className="text-extra-small text-uppercase text-medium-gray">CS Chapter Chair</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Aashish Arora is currently Chair-Person of IEEE ADIT Student Branch CS Chapter.</span>
                <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 sm-margin-seven-bottom xs-margin-40px-bottom wow slideInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/cs-chapter-vice-chair.jpg" alt="Some-Data" data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Karan Patel</div>
                <div className="text-extra-small text-uppercase text-medium-gray">CS Chapter Vice-Chair</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Karan Patel is currently Vice-Chair of IEEE ADIT Student Branch CS Chapter.</span>
                <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb xs-margin-20px-tb" />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 team-block text-left team-style-2 wow slideInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp'}}>
          <figure>
            <div className="team-image xs-width-100">
              <img src="images/cs-chapter-secretary.jpg" alt="Some-Data" data-no-retina />
              <div className="team-overlay bg-deep-pink" />
              <div className="team-member-position text-center margin-25px-top">
                <div className="text-extra-dark-gray font-weight-600 text-uppercase text-small alt-font">Prerak Shah</div>
                <div className="text-extra-small text-uppercase text-medium-gray">CS Chapter Secretary</div>
              </div>
            </div>
            <figcaption>
              <div className="overlay-content text-center icon-social-small">
                <span className="text-medium display-inline-block no-margin">Prerak Shah is currently Secretary of IEEE ADIT Student Branch CS Chapter.</span>
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
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">How can I avail membership of IEEE Computer Society?</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">To avail membership of IEEE Computer Society you must be an active IEEE Member.</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">03</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">Will I get a new Email Alias with IEEE Computer Society membership other than ieee.org?</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">Yes, you'll get only an email alias (computer.org) which can be used to forward emails to your orginal email id.</div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                    <div className="panel-title">
                      <span className="alt-font font-weight-500 text-deep-pink tab-tag">04</span>
                      <span className="text-extra-dark-gray xs-width-80 display-inline-block">How can I form a new IEEE CS Chapter?</span>
                      <i className="indicator fa fa-angle-down pull-right text-extra-dark-gray tz-icon-color" />
                    </div>
                  </a>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                  <div className="panel-body">To form a student branch chapter it is necessary to have a faculty advisor who is also a member of the Computer Society and six student members. Fill out and submit the <a href="https://www.computer.org/cms/chapters/docs/student_branch_chapter_formation_2010.doc" target="_blank" rel="noopener noreferrer">chapter petition</a>. If the petition is in order, IEEE student services will take the necessary action to obtain formal approval of the petition by the regional director, the regional student activities committee chair, and the Computer Society President.</div>
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

export default CsChapter;
