import { FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import { DiHtml5 } from 'react-icons/di';
import { TbBrandRedux } from 'react-icons/tb';

import { Tooltip } from 'react-tooltip';

const HeroComp = () => {
  return (
    <div>
      <div id='top' className='sm:mx-[19%] mx-[6%] mt-[41%] sm:mt-[8%]  '>
        <div>
          <p className='text-emerald-800 text-[20px]  font-semibold font-vollkorn'>
            Hi, my name is{' '}
          </p>
          <p className='text-slate-400 sm:text-[5rem] text-[2rem]  font-semibold font-vollkorn'>
            Jyotirmoy.
          </p>
          <p className='text-slate-700 sm:text-[4rem] text-[36px]  font-semibold font-abril tracking-wide'>
            I am a Frontend Developer.
          </p>
        </div>
        <div className='sm:mt-[0px]  mt-[6%]'>
          <p className='font-semibold sm:text-[23px] text-[19px] text-slate-500 font-vollkorn  sm:w-[61%] '>
            Specializing in building exceptional digital experiences.
          </p>
        </div>
        <div className='flex mt-[7%] gap-9'>
          <a id='js'>
            <IoLogoJavascript className='text-3xl text-amber-300' />
          </a>
          <a id='react'>
            <FaReact className='text-3xl text-teal-500' />
          </a>
          <a id='redux'>
            <TbBrandRedux className='text-3xl text-violet-700' />
          </a>

          <a id='html'>
            {' '}
            <DiHtml5 className='text-3xl text-orange-500' />
          </a>
          <a id='css'>
            <IoLogoCss3 className='text-3xl text-blue-700' />
          </a>

          <a id='tailwind'>
            <SiTailwindcss className='text-3xl text-cyan-500' />
          </a>
        </div>
      </div>
      <Tooltip anchorSelect='#js'>JavaScript</Tooltip>
      <Tooltip anchorSelect='#react'>React</Tooltip>
      <Tooltip anchorSelect='#redux'>Redux</Tooltip>
      <Tooltip anchorSelect='#html'>HTML</Tooltip>{' '}
      <Tooltip anchorSelect='#css'>CSS</Tooltip>{' '}
      <Tooltip anchorSelect='#tailwind'>Tailwind</Tooltip>
    </div>
  );
};

export default HeroComp;
