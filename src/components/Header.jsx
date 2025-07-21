import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className='bg-[#F5F5F5] hidden lg:flex flex justify-between px-8 py-2'>
        <ul className=' flex gap-4 '>
            <li><img className = "h-6 w-6" src="/Icons/Home-top-logo2.svg" alt="" /></li>
            <li><img className = "h-6 w-6" src="/Icons/Home-top-logo.svg" alt="" /></li>
        </ul>

        <ul className='flex items-center gap-3 text-xs font-semibold'>
            <li className='border-r-1 pr-2'>Find a Store</li>
            <li className='border-r-1 pr-2'>Help</li>
            <li className='border-r-1 pr-2'>Join Us</li>
            <li>Sign In</li>
        </ul>
      </div>
      <nav className='px-8 py-3 flex justify-between'>
        {/* logo */}
        <div className='flex flex-1 items-center'>
          <img src="/Icons/Logo.svg" alt="Logo" />
        </div>

        <div className='flex flex-1 items-center justify-center'>
          <ul className=' gap-4 font-semibold hidden lg:flex '>
            <li>New</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Jordan</li>
            <li>Sport</li>
          </ul>
        </div>


        {/* search bar */}
        <div className='flex flex-1 items-center justify-end gap-2'>

          <img src="/Icons/Search-icon.svg" className='lg:hidden' alt="Search" />
              <div className='relative'>
                <input type="text" className='bg-[#f5f5f5] hidden lg:block  placeholder:pl-9 hover:bg-[#e5e5e5] rounded-4xl p-2' placeholder='Search' />

                <div className='absolute top-0 p-2 rounded-[50%] hidden lg:block bg-[#f5f5f5]'>
                  <img src="/Icons/Search-icon.svg" alt="Search" />
                </div>
              </div>
          

    
          


          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
            <path stroke="currentColor" strokeWidth="1.5" d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
          </svg>
          <img src="/Icons/basket-icon.svg" alt="Basket" />
          <svg className = "lg:hidden" aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
            <path stroke="currentColor" strokeWidth="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
          </svg>
        </div>
      </nav>

      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper "
      >
        <SwiperSlide className='relative '>
          <img className='block sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_752,c_limit/21977e6e-0a55-47f6-bdc1-23d5cd8d8b3a/nike-just-do-it.png" alt="" />
          <img className='hidden sm:block object-cover ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1500,c_limit/04e990b6-a90a-4b17-975a-004e021f7920/nike-just-do-it.png" alt="" />
          <div className='absolute bottom-20 left-5'>
            <p className='text-white text-xl'>Scottie Scheffler</p>
            <h1 className='font-[helveticaNowBold] tracking-tighter text-white uppercase text-4xl lg:text-7xl '>PRIORITIES <br /> UNCHANGED. <br /> CROWN SECURED.</h1>
            <p className='text-white mt-1 mb-5 text-xl'>Victory looks worthy of the champion.</p>
            <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative h-full'>
          <img className ="block sm:hidden" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_771,c_limit/603cb41e-9faf-4881-9cda-c959c4bd4463/nike-just-do-it.jpg" alt="" />
          <img className="hidden sm:block object-cover h-full w-full" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1302,c_limit/0fd0039a-08db-4e06-930f-6735a319cbdf/nike-just-do-it.jpg" alt="" />
          <div className='absolute bottom-20 left-5'>
            <h1 className='font-[helveticaNowBold] tracking-tighter text-white uppercase text-4xl lg:text-7xl '>run supported</h1>
            <p className='text-white mt-1 mb-5 text-xl'>Supportive cushioning in the new Nike Structure 26 helps keep runners running.</p>
            <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop All Running</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative h-full'>
          <img className='block sm:hidden' src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/616d95db-9035-453a-83b8-cacb4bb6d877/image.jpg" alt="" />
          <img className ="hidden sm:block object-cover h-full w-full" src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/3228dce5-8ac2-4f9e-a274-c99460b5705c/image.jpg" alt="" />
          <div className='absolute bottom-20 left-5'>
            <h1 className='font-[helveticaNowBold] tracking-tighter text-white uppercase text-4xl lg:text-7xl'>Too easy</h1>
            <p className='text-white mt-1 mb-5'>True greats make greatness look easy</p>
            <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>

          </div>
        </SwiperSlide>
      </Swiper>
      
    </header>
  );
};

export default Header;
