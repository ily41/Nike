import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router'

const MainPageUI = ({ cardInfo }) => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Scroll function
  const scroll = (direction) => {
    if (!scrollRef.current) return
    const { clientWidth } = scrollRef.current
    const scrollAmount = direction === 'left' ? -clientWidth : clientWidth
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  // Check if scroll reached start or end
  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
  }

  // Add scroll listener
  useEffect(() => {
    const ref = scrollRef.current
    if (!ref) return
    checkScroll() // initial check
    ref.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll) // handle resize

    return () => {
      ref.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  return (
    <div className='mt-8'>
      <div className="hidden sm:flex justify-between items-center mx-5">
        <h2 className="text-2xl px-8 font-thin font-[helveticaNow]">{cardInfo.title}</h2>

        {cardInfo.title !== "Gear up by Sport" && (
          <div className={`flex gap-3 ${cardInfo.page === "Main" ? 'lg:hidden' : ''}`}>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 flex cursor-pointer justify-center items-center rounded-full bg-[#E5E5E5]   ${canScrollLeft ? 'hover:bg-[#CACACB]' : 'opacity-50 cursor-not-allowed'}`}
            >
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 flex cursor-pointer justify-center items-center rounded-full bg-[#E5E5E5]   ${canScrollRight ? 'hover:bg-[#CACACB]' : 'opacity-50 cursor-not-allowed'}`}
            >
              <img src="../public/Icons/right-arrow.svg" alt="Right arrow" />
            </button>
          </div>
        )}
      </div>

      <section
        ref={scrollRef}
        className={`flex w-full p-8 text-lg font-semibold overflow-x-scroll ${cardInfo.page === "Main" ? 'lg:overflow-auto scrollbar-hide' : ''} gap-5 scroll-smooth`}
      >
        {cardInfo.components.map((item, idx) => (
          <Link
            to={
              cardInfo.title === "Shop by Sport"
                ? `/products/men/${item.slug}`
                : cardInfo.title === "Shop by Collection"
                ? `/products/women/${item.slug}`
                : cardInfo.title === "Gear up by Sport"
                ? `/products/kids/${item.slug}`
                : `/products/${item.slug}`
            }
            state={{ title: item.buttonTitle }}
            key={idx}
            className={`cursor-pointer relative ${cardInfo.page === "women" ? 'min-w-[30%]' : 'min-w-[40%]'} max-w-[70%] lg:flex-1 ${cardInfo.components.length <= 3 ? 'lg:max-w-none lg:min-w-0' : ''} flex-shrink-0`}
          >
            <img className="h-auto w-full object-cover" src={item.imageURL} alt="" />
            {cardInfo.page === "women" ? (
              <>
                <h3 className="mt-2 text-sm sm:text-lg">{item.secondTitle}</h3>
                <h3 className="mt-2 text-lg sm:text-xl">{item.buttonTitle}</h3>
              </>
            ) : (
              <button className="hidden sm:block cursor-pointer hover:bg-[#CACACB] absolute bg-white text-black rounded-3xl font-medium px-[14px] py-[3px] tracking-tighter text-sm bottom-3 left-3 lg:bottom-9 lg:left-9 lg:text-lg lg:px-[16px] lg:py-[5px]">
                {item.buttonTitle}
              </button>
            )}
          </Link>
        ))}
      </section>
    </div>
  )
}

export default MainPageUI
