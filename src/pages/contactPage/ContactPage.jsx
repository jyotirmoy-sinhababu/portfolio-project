import { PiGithubLogo } from 'react-icons/pi';
import { CiLinkedin } from 'react-icons/ci';
import { SiFrontendmentor } from 'react-icons/si';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const ContactPage = () => {
  const [isCopy, setIsCopy] = useState(false);
  const copyFunction = async () => {
    try {
      await navigator.clipboard.writeText('jyotirmoysinhababu@gmail.com');
      setIsCopy(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        id='contact'
        className='flex items-center sm:mx-[19%] mx-[6%] mt-[27%] sm:mt-[8%] gap-[10px] '
      >
        <p className='text-cyan-800 sm:text-[56px] text-[26px] font-semibold font-abril tracking-wide'>
          Get in touch
        </p>
        <div className='w-[200px] border-2 h-0 border-teal-900'></div>
      </div>
      <div className='flex justify-center flex-row bottom-11 gap-9 items-center sm:mt-[6%]'>
        {' '}
        <Link
          to='https://github.com/jyotirmoy-sinhababu?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
        >
          <PiGithubLogo className='text-3xl text-teal-700 hover:text-teal-900' />
        </Link>
        <Link
          target='_blank'
          to='https://www.linkedin.com/in/jyotirmoy-sinhababu-64b9a7212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          rel='noopener noreferrer'
        >
          <CiLinkedin className='text-3xl text-teal-700 hover:text-teal-900' />
        </Link>
        <Link
          to='https://fueler.io/jjoy'
          target='_blank'
          className='flex text-xl text-teal-600'
        >
          <AiOutlineThunderbolt className='text-3xl text-teal-700 hover:text-teal-900' />
        </Link>
        <Link
          to='https://www.frontendmentor.io/profile/jyotirmoy-sinhababu'
          target='_blank'
          className='flex text-xl text-teal-600'
        >
          <SiFrontendmentor className='text-3xl text-teal-700 hover:text-teal-900' />
        </Link>
        <button
          onClick={() => {
            copyFunction();
          }}
        >
          <MdEmail className='text-3xl text-teal-700 hover:text-teal-900' />
        </button>
      </div>
      <div className='flex justify-center items-center'>
        {!isCopy ? (
          <span></span>
        ) : (
          <span className='mt-[2%] text-3xl text-teal-700 hover:text-teal-900'>
            Copied!
          </span>
        )}
      </div>
    </>
  );
};

export default ContactPage;
