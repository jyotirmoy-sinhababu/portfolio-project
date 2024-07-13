import { Link, animateScroll as scroll } from 'react-scroll';
import resume from '../../assets/myCV.pdf';

const SidebarMobileView = () => {
  return (
    <>
      <div className='rounded sm:hidden flex flex-col justify-center items-center h-[175%] z-10 w-[90%] bg-transparent top-[101%] left-[5%] absolute gap-[5%]'>
        <Link
          activeClass='active'
          to='about-page'
          spy={true}
          smooth={true}
          duration={500}
          className='text-[19px] text-teal-600 cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'
        >
          About
        </Link>
        <Link
          activeClass='active'
          to='project'
          spy={true}
          smooth={true}
          duration={500}
          className='text-[19px] text-teal-600 cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'
        >
          Project
        </Link>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          className='text-[19px] text-teal-600 cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'
        >
          Contact
        </Link>
        <a
          href={resume}
          download='Resume'
          className='flex justify-center items-center text-[19px] text-teal-600 cursor-pointer bg-transparent border-2 w-[100px] h-[41px] font-vollkorn hover:text-cyan-900'
        >
          Resume
        </a>
      </div>
      <div className='h-[175%] w-[90%] rounded absolute top-[101%] left-[5%] bg-cyan-950 opacity-20'></div>
    </>
  );
};

export default SidebarMobileView;
