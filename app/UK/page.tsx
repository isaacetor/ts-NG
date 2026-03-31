import Footer from '../../components/footer';
import Header from '../../components/header';
import AccrossBorders from '../../components/uk/accrossBorders';
import Feature1 from '../../components/uk/feature1';
import Feature2 from '../../components/uk/feature2';
import FiancialLife from '../../components/uk/fiancialLife';
import Hero from '../../components/uk/hero';
import Security from '../../components/uk/security';
import Testimonials from '../../components/uk/testimonial';
import ModernWorkingClass from '../../components/uk/workingClass';

export function Uk_Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <FiancialLife />
      <ModernWorkingClass />
      <AccrossBorders />
      <Security />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default Uk_Home;
