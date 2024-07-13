import insta from '../../assets/insta.png';

import { Link } from 'react-router-dom';

import { PiGithubLogo } from 'react-icons/pi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { motion } from 'framer-motion';

const InstaClone = () => {
  return (
    <>
      <div className='sm:mx-[14%] mx-[6%] mt-[27%] sm:mt-[10%] '>
        <p className='text-slate-600 sm:text-[31px] text-[23px] font-abril font-semibold'>
          Instagram Clone
        </p>
      </div>
      <motion.div
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.1 },
        }}
        className='flex sm:mx-[14%] mx-[6%] items-center mt-8 relative'
      >
        <div className='sm:block flex justify-center items-center flex-col'>
          <img
            className='sm:w-[60%] sm:h-[70%] rounded opacity-[0.6] hover:opacity-[1]'
            src={insta}
            alt='project image'
          />
          <p className='pt-2'>
            <strong className='flex text-cyan-700 text-[1rem] font-vollkorn'>
              React, Chakra UI, Firebase, Redux-toolkit
            </strong>
          </p>
          <p className='sm:hidden text-[1rem] text-center text-cyan-700 flex mt-7 font-vollkorn tracking-wide'>
            Immerse yourself in a beautiful, intuitive design that mirrors the
            familiarity of Instagram while offering functionality like follow,
            comment, like, post and able to delete post.
          </p>
        </div>
        <div className='sm:flex hidden z-10 items-center justify-end bg-gray-700  h-[30%] w-[54%] absolute left-[44%] opacity-95  rounded'>
          <p className='sm:bg-gray-700 text-[1rem] text-fuchsia-100 flex items-center pl-8 font-vollkorn tracking-wide'>
            Immerse yourself in a beautiful, intuitive design that mirrors the
            familiarity of Instagram while offering functionality like follow,
            comment, like, post and able to delete post.
          </p>
        </div>
      </motion.div>
      <div className='flex justify-end items-center sm:mx-[19%] mx-[6%] gap-5 sm:mt-0 mt-6'>
        <Link
          className='text-[21px] text-cyan-700'
          to='https://dancing-otter-dc5303.netlify.app/'
          target='_blank'
        >
          <FaArrowUpRightFromSquare />
        </Link>
        <Link
          className='text-[27px] text-cyan-700'
          to='https://github.com/jyotirmoy-sinhababu/insta-clone'
          target='_blank'
        >
          <PiGithubLogo />
        </Link>
      </div>
    </>
  );
};

export default InstaClone;
