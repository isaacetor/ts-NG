import Footer from '../_shared/footer';
import Header from '../_shared/header';
import AccrossBorders from './accrossBorders';
import Feature1 from './feature1';
import Feature2 from './feature2';
import FiancialLife from './fiancialLife';
import Hero from './hero';
import Security from './security';
import Testimonials from './testimonial';
import ModernWorkingClass from './workingClass';

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
