import NG_Header from '../_shared/NG_header';
import NG_Footer from '../_shared/NG_Footer';
import AboutHero from './_components/aboutHero';
import AboutUs from './_components/aboutUs';
import WhyWeBuilt from './_components/WhyWeBuilt';
import { OurMission } from './_components/ourMission';
import JoinUs from './_components/joinUs';
import AboutFounder from './_components/aboutFounder';

const About = () => {
  return (
    <div>
      <NG_Header />
      <AboutHero />
      <AboutUs />
      <WhyWeBuilt />
      <OurMission />
      <JoinUs />
      <AboutFounder />
      <NG_Footer />
    </div>
  );
};

export default About;
