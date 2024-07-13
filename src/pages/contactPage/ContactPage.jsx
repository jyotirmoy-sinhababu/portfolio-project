import { PiGithubLogo } from 'react-icons/pi';
import { CiLinkedin } from 'react-icons/ci';
import { SiFrontendmentor } from 'react-icons/si';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

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
        <a
          href='https://github.com/jyotirmoy-sinhababu?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
          id='github'
        >
          <PiGithubLogo className='text-3xl text-teal-700 hover:text-teal-900' />
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/jyotirmoy-sinhababu-64b9a7212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          rel='noopener noreferrer'
          id='linkedin'
        >
          <CiLinkedin className='text-3xl text-teal-700 hover:text-teal-900' />
        </a>
        <a
          href='https://fueler.io/jjoy'
          target='_blank'
          className='flex text-xl text-teal-600'
          id='fueler'
        >
          <AiOutlineThunderbolt className='text-3xl text-teal-700 hover:text-teal-900' />
        </a>
        <a
          href='https://www.frontendmentor.io/profile/jyotirmoy-sinhababu'
          target='_blank'
          className='flex text-xl text-teal-600'
          id='mentor'
        >
          <SiFrontendmentor className='text-3xl text-teal-700 hover:text-teal-900' />
        </a>
        <a
          onClick={() => {
            copyFunction();
          }}
          id='mail'
        >
          <MdEmail className='text-3xl text-teal-700 hover:text-teal-900' />
        </a>
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
      <Tooltip anchorSelect='#github'>Github</Tooltip>
      <Tooltip anchorSelect='#linkedin'>Linkedin</Tooltip>
      <Tooltip anchorSelect='#fueler'>Fueler</Tooltip>
      <Tooltip anchorSelect='#mentor'>Frontend Mentor</Tooltip>{' '}
      <Tooltip anchorSelect='#mail'>Mail</Tooltip>{' '}
    </>
  );
};

export default ContactPage;
