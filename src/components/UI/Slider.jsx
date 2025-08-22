import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Slider = ({header,productImages}) => {
  return (
    <>
    {header ? <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper cursor-pointer h-[500px] md:h-[600px] lg:h-[800px]"
      >
        
          <SwiperSlide className='relative '>
            <Link to="/products/scheffler" state={{title:'Scottie Scheffler'}}>
              <img className='block sm:hidden object-cover w-full h-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_752,c_limit/21977e6e-0a55-47f6-bdc1-23d5cd8d8b3a/nike-just-do-it.png" alt="" />
              <img className='hidden sm:block object-cover  w-full h-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1500,c_limit/04e990b6-a90a-4b17-975a-004e021f7920/nike-just-do-it.png" alt="" />
              <div className='absolute bottom-20 left-5'>
                <p className='text-white text-xl'>Scottie Scheffler</p>
                <h1 className='font-[helveticaNowBold] tracking-tighter text-white uppercase text-4xl lg:text-7xl '>PRIORITIES <br /> UNCHANGED. <br /> CROWN SECURED.</h1>
                <p className='text-white mt-1 mb-5 text-xl'>Victory looks worthy of the champion.</p>
                <button className=' bg-white hover:bg-[#CACACB] text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
              </div>
            </Link>
          </SwiperSlide>
          
          <SwiperSlide className='relative'>
            <Link to="/products/running" state={{title:'Running'}} >
              <img className ="block sm:hidden object-cover w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_771,c_limit/603cb41e-9faf-4881-9cda-c959c4bd4463/nike-just-do-it.jpg" alt="" />
              <img className="hidden sm:block w-full h-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1302,c_limit/0fd0039a-08db-4e06-930f-6735a319cbdf/nike-just-do-it.jpg" alt="" />
              <div className='absolute bottom-20 left-5'>
                <h1 className='font-[helveticaNowBold] tracking-tighter text-white uppercase text-4xl lg:text-7xl '>run supported</h1>
                <p className='text-white mt-1 mb-5 text-xl'>Supportive cushioning in the new Nike Structure 26 helps keep runners running.</p>
                <button className=' bg-white hover:bg-[#CACACB] text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop All Running</button>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <Link to="/products/jordan" state={{title:'Too Easy'}}>
              <img className='block sm:hidden object-cover w-full h-full' src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/616d95db-9035-453a-83b8-cacb4bb6d877/image.jpg" alt="" />
              <img className ="hidden sm:block object-cover w-full h-full" src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/3228dce5-8ac2-4f9e-a274-c99460b5705c/image.jpg" alt="" />
              <div className='absolute bottom-20 left-5'>
                <h1 className='font-[helveticaNowBold] tracking-tighter text-white uppercase text-4xl lg:text-7xl'>Too easy</h1>
                <p className='text-white mt-1 mb-5'>True greats make greatness look easy</p>
                <button className=' bg-white hover:bg-[#CACACB] text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
              </div>
            </Link>
          </SwiperSlide>
      </Swiper>  : 
        <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper "
      >
        {productImages.map((item,idx) => (
          <SwiperSlide key={idx} className='relative w-full h-full'>
              <img className ="block lg:hidden w-full object-cover" src={item} alt="" />
            </SwiperSlide>
        ))}
        
        
        
        
        

      </Swiper>
      }
    
      </>
  )
}

export default Slider