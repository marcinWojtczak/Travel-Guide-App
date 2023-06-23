import travel  from '../../assets/img/travel.jpg';
import Input from '../Input/Input'

const Main = () => {

  return (
    <>
      <div style={{backgroundImage: `url(${travel})` }} className='bg-center bg-cover w-full h-[80vh] flex flex-col items-center py-16'>
        <div className='w-2/3 text-center'>
          <h1 className='font-bold w-content tracking-wider mb-8 md:font-[42px]'>
            Explore the World with Us - Your Ultimate Travel Guide
          </h1>
          <Input />
        </div>
      </div>
    </>
  )
}

export default Main