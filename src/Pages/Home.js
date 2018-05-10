import React, { Component } from 'react';

/* Components */
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import MottoSection from './Components/MottoSection';
import ParallaxSection from './Components/ParallaxSection';
import BenefitSection from './Components/BenefitSection';
import JoinSection from './Components/JoinSection';
import StatSection from './Components/StatSection';
import CSChapter from './Components/CSChapter';
import WIEChapter from './Components/WIEChapter';
import EventSection from './Components/EventSection';
import ExecomSection from './Components/ExecomSection';
import MessageExecomSection from './Components/MessageExecomSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import UpArrow from './Components/UpArrow';

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <HomeSection />
        <MottoSection />
        <ParallaxSection />
        <BenefitSection />
        <JoinSection />
        <StatSection />
        <CSChapter />
        <WIEChapter />
        <EventSection />
        <ExecomSection />
        <MessageExecomSection />
        <ContactSection />
        <Footer />
        <UpArrow />
      </div>
    );
  }

}

export default Home;
