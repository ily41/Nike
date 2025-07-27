import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";



const Main = () => {
  return (
    <main>
      <Slider />
      <div className='sm:flex'>

          <div className='relative sm:w-2/4 h-[50vh] lg:h-[86vh]'>
              <img className=' lg:hidden  object-cover object-top  h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_746,c_limit/1aef9127-19f1-4479-b239-e1611b21503f/nike-just-do-it.jpg" alt="" />
              <img className='hidden  lg:block object-cover h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1213,c_limit/a62593d2-39e1-4289-bf04-c0cad4195521/nike-just-do-it.jpg" alt="" />

              <div className='absolute bottom-20 left-5'>
                <p className='text-white  text-xl'>Back to sport</p>
                <h1 className='font-[helveticaNow] mt-2 mb-5 tracking-tighter text-white  text-2xl capitalize '>practice like a pro</h1>

                <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
              </div>
          </div>

          <div className='relative sm:w-2/4 h-[50vh] lg:h-[86vh]'>
              <img className=' object-cover h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_788,c_limit/2942b327-3555-43cb-8dad-a4b0d7443ce1/nike-just-do-it.jpg" alt="" />
              <div className='absolute bottom-20 left-5'>
                <p className='text-white  text-xl'>Women's Air Jordan 3 'Starfish'</p>
                <h1 className='font-[helveticaNow] mt-2 mb-5 tracking-tighter text-white  text-2xl capitalize '>Light Work, Heavy Hitter</h1>
                <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
              </div>
          </div>
      </div>

      {/* 3 categories */}

      <section className="flex w-full p-8 text-lg font-semibold overflow-x-scroll scrollbar-hide  gap-5 ">
        <div className=" relative max-w-[60%]  flex-shrink-0 lg:flex-shrink-1"> 
          <img className = " h-auto w-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_743,c_limit/bde3650b-fc78-4496-8d70-447e745eb179/nike-just-do-it.jpg" alt="" />
          <h3 className="mt-5 sm:hidden">Shop Training</h3>
          <button className="hidden sm:block absolute bg-white text-black rounded-3xl font-medium px-[14px] py-[3px] tracking-tighter text-sm bottom-3 left-3 lg:bottom-9 lg:left-9 lg:text-base lg:px-[16px] lg:py-[5px]">Shop Training</button>
        </div>
        <div className="max-w-[60%] relative flex-shrink-0 lg:flex-shrink-1">
          <img className = "h-auto w-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_743,c_limit/21439061-fbf7-46e2-a341-c79385b59c6d/nike-just-do-it.jpg" alt="" />
          <h3 className="mt-5 sm:hidden">Shop Running</h3>
          <button className="hidden sm:block absolute bg-white text-black rounded-3xl font-medium px-[14px] py-[3px] tracking-tighter text-sm bottom-3 left-3 lg:bottom-9 lg:left-9 lg:text-base lg:px-[16px] lg:py-[5px]">Shop Running</button>
        </div>
        <div className="max-w-[60%] relative flex-shrink-0 lg:flex-shrink-1">
          <img className = "h-auto w-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_743,c_limit/89e623fc-39e8-4a7d-acc9-ce79e58be88c/nike-just-do-it.jpg" alt="" />
          <h3 className="mt-5 sm:hidden">Shop Golf</h3>
          <button className="hidden sm:block absolute bg-white text-black rounded-3xl font-medium px-[14px] py-[3px] tracking-tighter text-sm bottom-3 left-3 lg:bottom-9 lg:left-9 lg:text-base lg:px-[16px] lg:py-[5px]">Shop Golf</button>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl px-8 font-thin font-[helveticaNow]">Shop The Classics</h2>
          <div className="flex gap-3">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
            </div>

            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#CACACB]">
              <img src="../public/Icons/right-arrow.svg" alt="" />
            </div>

          </div>

        </div>


        <div className="overflow-x-scroll scroll-on-hover p-3 flex gap-3">

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

          <div className="max-w-[60%] sm:max-w-[225px] flex-shrink-0">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </div>

        </div>
      </section>
        
      

  
    </main>
  )
}

export default Main