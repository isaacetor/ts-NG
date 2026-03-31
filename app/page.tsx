import Footer from './_shared/footer';
import Header from './_shared/header';
import AccrossBorders from './uk/_components/accrossBorders';
import Feature1 from './uk/_components/feature1';
import Feature2 from './uk/_components/feature2';
import FiancialLife from './uk/_components/fiancialLife';
import Hero from './uk/_components/hero';
import Security from './uk/_components/security';
import Testimonials from './uk/_components/testimonial';
import ModernWorkingClass from './uk/_components/workingClass';

const Home = () => {
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

export default Home;
