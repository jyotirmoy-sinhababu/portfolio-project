import wind from '../../assets/wind.png';

import { Link } from 'react-router-dom';

import { PiGithubLogo } from 'react-icons/pi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AirbnbApp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='sm:mx-[14%] mx-[6%] mt-[27%] sm:mt-[10%] '>
        <p className='text-slate-600 sm:text-[31px] text-[23px] font-semibold font-abril '>
          Airbnb alike
        </p>
      </div>
      <motion.div
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.1 },
        }}
        className='flex sm:mx-[14%] mx-[6%] items-center mt-8 relative'
        onClick={navigate('https://resplendent-flan-f21653.netlify.app')}
      >
        <div className='sm:block flex justify-center items-center flex-col'>
          <img
            className='sm:w-[60%] sm:h-[70%] rounded opacity-[0.6] hover:opacity-[1]'
            src={wind}
            alt='project image'
          />
          <p className='pt-2'>
            <strong className='flex text-cyan-700 text-[1rem] font-vollkorn'>
              React, CSS3
            </strong>
          </p>
          <p className='sm:hidden text-[1rem] text-center text-fuchsia-100 flex mt-7 font-vollkorn tracking-wide'>
            UI copy of airbnb landing page with search functionality.
          </p>
        </div>
        <div className='sm:flex hidden z-10 items-center justify-center bg-gray-700 opacity-95 h-[30%] w-[44%] absolute left-[47%]  rounded'>
          <p className='sm:bg-gray-700 text-[1rem] text-fuchsia-100 flex items-center mx-[4%] font-vollkorn tracking-wide'>
            UI copy of airbnb landing page with search functionality.
          </p>
        </div>
      </motion.div>
      <div className='flex justify-end sm:mx-[19%] mx-[6%] gap-5 sm:mt-0 mt-6 items-center'>
        <Link
          className='text-[21px] text-cyan-700 '
          to='https://resplendent-flan-f21653.netlify.app'
          target='_blank'
        >
          <FaArrowUpRightFromSquare />
        </Link>
        <Link
          className='text-[27px] text-cyan-700'
          to='https://github.com/jyotirmoy-sinhababu/Airbnb-alike'
          target='_blank'
        >
          <PiGithubLogo />
        </Link>
      </div>
    </>
  );
};

export default AirbnbApp;
