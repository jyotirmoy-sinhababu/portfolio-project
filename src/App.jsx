import './App.css';
import LandingPage from './pages/landingPage/LandingPage';

import MyContext from './components/mycontext/MyContext';

function App() {
  return (
    <>
      <MyContext>
        <LandingPage />
      </MyContext>
    </>
  );
}

export default App;
