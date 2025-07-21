import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='py-10 flex justify-center flex-col gap-8 items-center'>
            <img src="../public/Icons/Logo.svg" alt="" />
            <ul className='flex items-center gap-3 text-base font-semibold'>
                <li className=' pr-2'>Find a Store</li>
                <li className=' pr-2'>Help</li>
                <li className=' pr-2'>Join Us</li>
                <li>Sign In</li>
            </ul>
        </div>

        <div className='px-4 font-[helveticaNow]'>

            <div className='flex flex-col sm:flex-row sm:justify-around my-18 gap-4'>

            <div>
                <h4 className='text-xl mb-5 '>Featured</h4>
                
                <ul className='hidden sm:flex flex-col gap-3 font-semibold text-[#707072]'>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>

            <div>
                <h4 className='text-xl mb-5 '>Shoes</h4>
                
                <ul className='flex flex-col gap-3  font-semibold text-[#707072]'>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>

            <div>
                <h4 className='text-xl mb-5 '>Clothing</h4>
                
                <ul className='flex flex-col gap-3  font-semibold text-[#707072]'>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>

            <div>
                <h4 className='text-xl mb-5 '>Kids</h4>
                
                <ul className='flex flex-col gap-3  font-semibold text-[#707072]'>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>



            </div>

            <hr className='px-4  text-[#b3b3b3]'/>
            <div className='block lg:flex justify-around mb-15'>
                <div className='flex  lg:flex-col justify-between mt-10'>
                    <p>Resources</p>
                    <img className='lg:hidden' src="../public/Icons/down-arrow.svg" alt="" />
                    <ul className='hidden lg:flex mt-7  flex-col gap-3 text-sm text-[#707072]'>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                    </ul>

                </div>

                    <hr className='px-4 mt-4 lg:hidden text-[#b3b3b3]'/>

                <div className='flex lg:flex-col justify-between mt-10'>
                    <p>Help</p>
                    <img className='lg:hidden' src="../public/Icons/down-arrow.svg" alt="" />
                    <ul className='hidden lg:flex mt-7  flex-col gap-3 text-sm text-[#707072]'>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                    </ul>

                </div>

                    <hr className='px-4 mt-4 lg:hidden text-[#b3b3b3]'/>

                <div className='flex lg:flex-col justify-between mt-10'>
                    <p>Company</p>
                    <img className='lg:hidden' src="../public/Icons/down-arrow.svg" alt="" />
                    <ul className='hidden lg:flex mt-7  flex-col gap-3 text-sm text-[#707072]'>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                    </ul>

                </div>

                    <hr className='px-4 mt-4 lg:hidden text-[#b3b3b3]'/>

                <div className='flex  lg:flex-col justify-between mt-10'>
                    <p>Promotions and Discounts</p>
                    <img className='lg:hidden' src="../public/Icons/down-arrow.svg" alt="" />
                    <ul className='hidden lg:flex mt-7  flex-col gap-3 text-sm text-[#707072]'>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                        <li>Get Help</li>
                    </ul>

                </div>

                    <hr className='px-4 mt-4 lg:hidden text-[#b3b3b3]'/>

                <div className='flex flex-col justify-between mt-10 text-[#707072]'>
                    <p className='flex gap-3 items-center text-sm'>
                        <svg aria-hidden="true" class="css-npy3on" focusable="false" viewBox="0 0 24 24" role="img" width="20px" height="20px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path></svg>
                        United states
                    </p>
                </div>

                    <hr className='px-4 mt-4 lg:hidden text-[#b3b3b3]'/>
            </div>

            


            <p className='text-[#7e7e7e] my-4'>&copy; 2025  Nike, Inc. All Rights Reserved</p>

            <ul className='text-[#7e7e7e] text-sm flex flex-col mb-20 gap-2'>
                <li className='flex gap-1'>Guides <img className="w-4 h-4" src="../public/Icons/down-arrow.svg" alt="" /></li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Nike Privacy Policy</li>
                <li className='flex gap-2'><img src="../public/Icons/privacy-icon.png" alt="" />Your Privacy Choices</li>
                <li>Ca Supply Chains Act</li>
            </ul>

            

        </div>


    </footer>
  )
}

export default Footer