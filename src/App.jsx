import './App.css';
import LandingPage from './pages/landingPage/LandingPage';

import MyContext from './components/mycontext/MyContext';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <MyContext>
        <LandingPage />
      </MyContext>
    </motion.div>
  );
}

export default App;
