import Footer from '../_shared/footer';
import Header from '../_shared/header';
import AccrossBorders from './_components/accrossBorders';
import Feature1 from './_components/feature1';
import Feature2 from './_components/feature2';
import FiancialLife from './_components/fiancialLife';
import Hero from './_components/hero';
import Security from './_components/security';
import Testimonials from './_components/testimonial';
import ModernWorkingClass from './_components/workingClass';

const UK = () => {
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
};

export default UK;
