import myPic from '../../assets/profile.jpeg';

const AboutPage = () => {
  return (
    <div>
      <div
        id='about-page'
        className='sm:mx-[19%] mx-[6%] mt-[27%] sm:mt-[8%] gap-[10px] flex items-center'
      >
        <p className='text-cyan-800 sm:text-[56px] text-[26px] font-abril font-semibold'>
          About me{' '}
        </p>
        <div className='w-[200px] border-2 h-0 border-teal-900'></div>
      </div>
      <div className='sm:mx-[19%] mx-[6%] mt-8  flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-0 gap-5 '>
        <div className='sm:block flex justify-center items-center'>
          <p className='font-semibold sm:text-[17px] text-[19px] text-slate-700 sm:w-[71%] w-[98%] tracking-wider sm:text-left text-center font-vollkorn'>
            Hello! My name is Jyotirmoy ,I enjoy creating visually pleasing
            website. My interest in web development started back in 2022, when I
            decided to try building websites. Journey begins with learning HTML
            & CSS . Fast-Forward to today I have learned many more thing. My
            main focus these days is building visually pleasing and responsive
            website.
          </p>
        </div>
        <div className='  flex justify-center items-center rounded'>
          <img
            className='sm:w-[100%] w-[80%] h-[70%] rounded border-2'
            src={myPic}
            alt='my photo '
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
