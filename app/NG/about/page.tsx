import { AboutHero } from '@/app/components/uk_about/hero';
import AboutUs from '@/app/components/NG_about/aboutUs';
import WhyWeBuilt from '@/app/components/NG_about/WhyWeBuilt';
import { OurMission } from '@/app/components/NG_about/ourMission';
import JoinUs from '@/app/components/NG_about/joinUs';
import AboutFounder from '@/app/components/NG_about/aboutFounder';
import NG_Footer from '@/app/components/NG_shared/NG_Footer';
import NG_Header from '@/app/components/NG_shared/NG_header';

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
