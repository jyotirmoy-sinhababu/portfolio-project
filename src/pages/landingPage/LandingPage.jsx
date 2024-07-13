import HeroComp from '../../components/heroComp/HeroComp';
import Navbar from '../../components/nav/Navbar';
import AboutPage from '../aboutPage/AboutPage';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroComp />
      <AboutPage />
    </div>
  );
};

export default LandingPage;
