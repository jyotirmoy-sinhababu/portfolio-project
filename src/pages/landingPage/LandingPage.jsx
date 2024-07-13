import HeroComp from '../../components/heroComp/HeroComp';
import Navbar from '../../components/nav/Navbar';
import AboutPage from '../aboutPage/AboutPage';
import ContactPage from '../contactPage/ContactPage';
import MyProjects from '../myproject/MyProjects';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroComp />
      <AboutPage />
      <MyProjects />
      <ContactPage />
    </div>
  );
};

export default LandingPage;
