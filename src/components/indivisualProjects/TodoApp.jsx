import TodoPic from '../../assets/todo.png';

import { Link } from 'react-router-dom';

import { PiGithubLogo } from 'react-icons/pi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { motion } from 'framer-motion';

const TodoApp = () => {
  return (
    <>
      <div className='sm:mx-[21%] mx-[6%] mt-[27%] sm:mt-[10%] '>
        <p className='text-slate-600 sm:text-[31px] text-[23px] font-semibold font-abril'>
          Todo app
        </p>
      </div>
      <motion.div
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.1 },
        }}
        className='flex items-center justify-center sm:mx-[21%] mx-[6%] mt-8 sm:absolute'
      >
        <div className='sm:flex hidden z-10  bg-gray-700   min-w-[54%] rounded opacity-95'>
          <p className='sm:bg-gray-700 text-[1rem] text-fuchsia-100 flex items-center justify-center rounded font-vollkorn tracking-wide'>
            Todo app is a CRUD app, where user can create a note, mark it as
            completed and can delete it.
          </p>
        </div>
        <div className='sm:block flex justify-center items-center flex-col sm:relative sm:right-[10%]'>
          <img
            className='sm:m-w-[80%] sm:h-[70%] rounded opacity-[0.6] hover:opacity-[1]'
            src={TodoPic}
            alt='project image'
          />
          <p className='pt-2 '>
            <strong className='flex text-cyan-700 text-[1rem] font-vollkorn'>
              React, TypeScript, Redux-toolkit
            </strong>
          </p>
          <p className='sm:hidden flex text-[1rem] text-fuchsia-100 text-center font-vollkorn tracking-wide'>
            Todo app is a CRUD app, where user can create a note, mark it as
            completed and can delete it.
          </p>
          <div className='sm:flex  hidden justify-end sm:mx-0 mx-[6%] gap-5 sm:mt-0 mt-6 items-center'>
            <Link
              className='text-[21px] text-cyan-700'
              to='https://spectacular-wisp-747d22.netlify.app'
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
        </div>
      </motion.div>
      <div className='sm:hidden flex justify-end sm:mx-[19%] mx-[6%] gap-5 sm:mt-0 mt-6'>
        <Link
          className='text-[21px] text-cyan-700'
          to='https://spectacular-wisp-747d22.netlify.app'
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

export default TodoApp;
