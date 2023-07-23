import travel  from '../../assets/img/travel.jpg';
import Input from '../Input/Input'

const Main = () => {

  return (
    <>
      <div style={{backgroundImage: `url(${travel})` }} className='bg-center bg-cover w-full h-[80vh] flex flex-col items-center py-16'>
        <div className='sm:w-2/3 w-4/5  text-center flex flex-col items-center'>
          <h1 className='font-black w-content tracking-wider mb-8 w-[70%] sm:w-full'>
            Explore the World with Us - Your Ultimate Travel Guide
          </h1>
          <Input />
        </div>
      </div>
    </>
  )
}

export default Main