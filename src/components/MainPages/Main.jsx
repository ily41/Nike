import Slider from "../UI/Slider";
import { Link } from "react-router";
import cardInfo from '../../provider/cardInfo.json'
import MainPageUI from "../UI/MainPageUI";
import Classics from "../UI/Classics";


const Main = () => {      


  return (
    <main>
      <Slider header = {true}/>
      <div className='sm:flex'>
          <Link className='relative cursor-pointer sm:w-2/4 h-[50vh] lg:h-[86vh]' to="/products/sport" state={{title:'Sport'}}>
                <img className=' lg:hidden  object-cover object-top  h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_746,c_limit/1aef9127-19f1-4479-b239-e1611b21503f/nike-just-do-it.jpg" alt="" />
                <img className='hidden  lg:block object-cover h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1213,c_limit/a62593d2-39e1-4289-bf04-c0cad4195521/nike-just-do-it.jpg" alt="" />
                <div className='absolute bottom-20 left-5'>
                  <p className='text-white  text-xl'>Back to sport</p>
                  <h1 className='font-[helveticaNow] mt-2 mb-5 tracking-tighter text-white  text-2xl capitalize '>practice like a pro</h1>

                  <button className=' bg-white hover:bg-[#CACACB] cursor-pointer text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
                </div>
          </Link>

          <Link to="/products/starfish" state={{title:'Starfish Series'}} className='relative cursor-pointer sm:w-2/4 h-[50vh] lg:h-[86vh]'>
              <img className=' object-cover h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_788,c_limit/2942b327-3555-43cb-8dad-a4b0d7443ce1/nike-just-do-it.jpg" alt="" />
              <div className='absolute bottom-20 left-5'>
                <p className='text-white  text-xl'>Women's Air Jordan 3 'Starfish'</p>
                <h1 className='font-[helveticaNow] mt-2 mb-5 tracking-tighter text-white  text-2xl capitalize '>Light Work, Heavy Hitter</h1>
                <button className=' bg-white hover:bg-[#CACACB] cursor-pointer text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
              </div>
          </Link>
      </div>

      {/* 3 categories */}

      <section className="flex w-full p-8 text-lg font-semibold  scrollbar-hide  gap-5 ">
        <MainPageUI cardInfo={cardInfo[0]}/>
      </section>

      <Classics />
        
      

  
    </main>
  )
}

export default Main