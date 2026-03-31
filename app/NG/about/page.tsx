import AboutUs from '@/components/NG_about/aboutUs';
import WhyWeBuilt from '@/components/NG_about/WhyWeBuilt';
import { OurMission } from '@/components/NG_about/ourMission';
import JoinUs from '@/components/NG_about/joinUs';
import AboutFounder from '@/components/NG_about/aboutFounder';
import NG_Footer from '@/components/NG_shared/NG_Footer';
import NG_Header from '@/components/NG_shared/NG_header';
import AboutHero from '@/components/NG_about/aboutHero';

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
