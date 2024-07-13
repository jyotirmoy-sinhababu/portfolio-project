import TodoApp from '../../components/indivisualProjects/TodoApp';
import AirbnbApp from '../../components/indivisualProjects/AirbnbApp';
import InstaClone from '../../components/indivisualProjects/InstaClone';

const MyProjects = () => {
  return (
    <div id='project'>
      <div className='flex items-center gap-[4%] mx-[6%] sm:mx-[19%] mt-[38%] sm:mt-[10%]'>
        <p className='text-cyan-800 sm:text-[56px] text-[26px] font-abril font-semibold tracking-wide '>
          Some Projects I've Built
        </p>
        <div className='border-2 border-teal-900  w-[210px] h-[2px]'></div>
      </div>
      <div>
        <InstaClone />
        <TodoApp />
        <div className='mt-[27%]'>
          <AirbnbApp />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
