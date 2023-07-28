import travel  from '../../assets/img/travel.jpg';
import Input from '../Input/Input'

const Main = () => {

  return (
    <>
      <div style={{backgroundImage: `url(${travel})` }} className='bg-center bg-cover w-full h-[60vh] flex flex-col items-center py-16'>
        <div className='sm:w-2/3 w-4/5  text-center flex flex-col items-center'>
          <h1 className='font-bold text-[38px] sm:text-[48px] w-content leading-none tracking-wider mb-8 sm:w-[70%] w-full'>
            Explore The World With Us - Your Ultimate Travel Guide
          </h1>
          <Input />
        </div>
      </div>
    </>
  )
}

export default Main