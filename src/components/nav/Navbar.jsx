import { useContext } from 'react';
import { booleanContext } from '../mycontext/MyContext';

import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import resume from '../../assets/myCV.pdf';

import Logo from '../logo/Logo';
import SidebarMobileView from './SidebarMobileView';

import { Link, animateScroll as scroll } from 'react-scroll';

import { motion } from 'framer-motion';

const Navbar = () => {
  const { isOpen, toggleSidebar } = useContext(booleanContext);

  return (
    <div className='flex justify-between relative  items-center sm:mx-[9%] mx-[6%]  h-[103px] sm:border-0 border-b-2  border-cyan-800'>
      <Link
        className='cursor-pointer'
        activeClass='active'
        to='top'
        spy={true}
        smooth={true}
        duration={500}
      >
        <Logo />
      </Link>
      <div className='sm:flex items-center gap-7 hidden'>
        <div className='flex gap-7'>
          <Link
            activeClass='active'
            to='about-page'
            spy={true}
            smooth={true}
            duration={500}
            className='text-[18PX]  hover:text-cyan-600 cursor-pointer font-vollkorn text-cyan-900 font-medium'
          >
            About
          </Link>
          <Link
            activeClass='active'
            to='project'
            spy={true}
            smooth={true}
            duration={500}
            className='text-[18PX]  hover:text-cyan-600 cursor-pointer font-vollkorn text-cyan-900 font-medium'
          >
            Project
          </Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            className='text-[18PX]  hover:text-cyan-600 cursor-pointer font-vollkorn text-cyan-900 font-medium'
          >
            Contact
          </Link>
        </div>
        <div className='flex text-[18PX] font-vollkorn hover:text-cyan-600 border-2 items-center justify-center h-[50px] w-[100px] text-cyan-900 bottom-3'>
          <motion.a whileTap={{ scale: 1.2 }} href={resume} download='Resume'>
            Resume
          </motion.a>
        </div>
      </div>
      <div className='sm:hidden '>
        <button onClick={toggleSidebar} className='z-50'>
          {isOpen ? (
            <RxCross1 className='text-2xl text-cyan-600 font-extrabold' />
          ) : (
            <GiHamburgerMenu className='text-2xl text-cyan-600 font-extrabold' />
          )}
        </button>
      </div>
      {isOpen ? <SidebarMobileView /> : null}
    </div>
  );
};

export default Navbar;
