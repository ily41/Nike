import { useState } from 'react';
import data from '../provider/HomePage.json'
import { Link } from 'react-router';

const Header = () => {

  const [hoveredItem, sethoveredItem] = useState(null)
  



  return (
    <header className='z-50'>
      {/* Top Nav */}
      <div className='bg-[#F5F5F5] hidden lg:flex  justify-between px-8 py-2'>
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
      </div >
      <nav className=" sticky top-0 flex justify-between relative">
 
          {/* logo */}
          <div className='px-8 py-3 flex flex-1 items-center'>
            <Link to='/' />
              <img className='cursor-pointer' src="/Icons/Logo.svg" alt="Logo" />
            <Link />
          </div>

          <div className='flex flex-1  items-stretch justify-center'>
            <ul className=' font-semibold hidden lg:flex cursor-pointer'>
              {Object.keys(data).map((item,idx) => (
                <div
                key={idx}
                  onMouseEnter={() => {sethoveredItem(item)}}
                  onMouseLeave={() => {sethoveredItem(null)}}
                  className='flex items-center'
                >
                  <li
                    
                    key={item}
                    className='relative pb-1 px-2 hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-11/12 hover:after:bg-black hover:after:translate-y-[4px]'
                  >
                    {item}
                  </li>
                </div>
              ))}
            </ul>


          </div>



          {/* search bar */}
          <div className='flex px-8 py-3 flex-1 items-center justify-end gap-2'>

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


     
        {hoveredItem && 
        <div 
        onMouseEnter={() => {sethoveredItem(hoveredItem)}}
        onMouseLeave={() => {sethoveredItem(null)}}
        className='absolute  left-0 top-15 z-1000 w-screen flex justify-center items-start py-10 bg-white'>
          {data[hoveredItem]?.map(item => {
            return (
              <div className='px-12' key={item.title}>
                <h5 className='font-semibold cursor-pointer mb-3'><Link to ='/products'>{item.title}</Link ></h5>
                <ul>
                  {item.links.map(link => 
                    
                      <li className='text-sm py-1 cursor-pointer hover:text-black font-[helveticaNow] text-[#707072]'><Link to ='/products'>{link.name}</Link></li>
                    
                  )}
                </ul>
              </div>
            );
          })}
        </div>
        }
      </nav>
      
      
      
    </header>
  );
};

export default Header;
