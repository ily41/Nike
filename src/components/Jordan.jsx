import Card from './Card'
import products from '../provider/products.json'
import { Link } from 'react-router'
import  { useRef, useState, useEffect } from 'react'

const Jordan = () => {

    const productsInUse = products.filter(el => el.categories.includes("jordanPage"))
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const scroll = (direction) => {
      if (!scrollRef.current) return
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    const checkScroll = () => {
      if (!scrollRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
    }

    useEffect(() => {
      const ref = scrollRef.current
      if (!ref) return
      checkScroll() 
      ref.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll) 

      return () => {
        ref.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }, [])


  return (
    <>
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#111111] text-white text-[12px]  lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>

        <div className='bg-[#1F1F21]'>


        <section>
            <div className='bg-[#1F1F21] flex flex-col items-center gap-8 p-8'>
                <svg aria-hidden="false"  focusable="false" viewBox="4 2.5 16 17" role="img" width="91px" height="84px" fill="none"><path fill="white" fillRule="evenodd" d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z" clipRule="evenodd"></path><title>jordan</title></svg>
                
                <div 
                  className="font-[helveticaNow] text-white flex gap-7 overflow-x-auto scrollbar-hide justify-center w-full"
                >
                  <Link to="/products/jordan/new-arrivals" state={{title: "Jordan New Releases"}}>
                      <span className='cursor-pointer hover:text-[#949494] text-base shrink-0 whitespace-nowrap'>New Arrivals</span>
                  </Link>
                  <Link to="/products/jordan/sport" state={{title: "Jordan Sport Products"}}>
                      <span className='cursor-pointer hover:text-[#949494] text-base shrink-0 whitespace-nowrap'>Jordan Sport</span>
                  </Link>
                  <Link to="/products/jordan/all-shoes" state={{title: "Jordan Shoes"}}>
                      <span className='cursor-pointer hover:text-[#949494] text-base shrink-0 whitespace-nowrap'>Shoes</span>
                  </Link>
                  <Link to="/products/jordan/all-clothing" state={{title: "Jordan Clothing"}}>
                      <span className='cursor-pointer hover:text-[#949494] text-base shrink-0 whitespace-nowrap'>Clothing</span>
                  </Link>
                  <Link to="/products/jordan/" state={{title: ""}}>
                      <span className='cursor-pointer hover:text-[#949494] text-base shrink-0 whitespace-nowrap'>Accessories</span>
                  </Link>
                </div>
            </div>
        </section>

        <section >
            <img className='hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1440,c_limit/2347dec0-e79f-44cd-8f68-78b9ae5d5be6/jordan.png" alt="" />
            <img className='sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_724,c_limit/d3ece557-a082-4aad-845f-4afab00df876/jordan.png" alt="" />
        </section >

        <section className='font-[helveticaNow] text-white flex flex-col items-center gap-1 p-9'>
            <span>Jordan Brand Presents</span>
            <h3 className='font-[helveticaNow] uppercase text-6xl'>The One</h3>
            <span className='text-xl text-center pt-3 pb-5'>A global showcase to crown the best 1-on-1 player in the world. </span>
            <a href='https://www.youtube.com/live/sO_u0GCuJbE'>
                <button className='bg-white cursor-pointer hover:text-[#949494] text-black p-1 px-4 font-[helveticaNow] rounded-2xl'>Explore</button>
            </a>
        </section>

        <section className='font-[helveticaNow]'>   
            <h3 className='text-xl text-white uppercase p-8'>on the street</h3>

            <Link to="/products/jordan/air-jordan" state={{title: "Shattered Backboard Capsule"}} className='relative cursor-pointer'>
                <img className='sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_830,c_limit/ba4729c1-1a0f-4802-bc91-6ba3421f435d/jordan.png" alt="" />
                <img className='hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1225,c_limit/f90e2631-abb0-4dd4-8163-b70caa960ee1/jordan.png" alt="" />
                <div className='absolute left-6 bottom-6 text-white'>
                    <span>AJ1 'Shattered Backboard'</span>
                    <h3 className='text-4xl font-[helveticaNowBold] pt-2 pb-7'>LACE 'EM UP.  <br></br> TEAR IT DOWN.</h3>
                    <button className='bg-white text-black p-1 px-4 font-[helveticaNow] rounded-2xl'>Get Notified</button>
                </div>
            </Link>
        </section>

        <section>
            <h3 className='uppercase text-white text-2xl p-5 pt-9'>Trending</h3>
            <div className='flex flex-col gap-2 sm:gap-20 font-[helveticaNow]'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
                    <div className='relative'>
                        <img className='sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_704,c_limit/6bec1803-d60e-4253-8012-2eb1a5ed24d3/jordan.png" alt="" />
                        <img className='hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_567,c_limit/213158d8-fb0a-4355-94da-ab8848f5c5ee/jordan.png" alt="" />
                        <div className='absolute left-10 bottom-10 flex flex-col gap-5 '>
                            <h3 className='uppercase text-white text-3xl *:'>air jordan 1 mule</h3>
                            <button className='bg-white text-black rounded-full p-2 px-4  hover:bg-[#707072] cursor-pointer self-start'>Shop</button>

                        </div>
                    </div>
                    <div className='relative'>
                        <img className='sm:hidden'  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_704,c_limit/3333fe78-a113-4f4e-9e6d-5d13df6dfb74/jordan.png" alt="" />
                        <img className='hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_567,c_limit/e635cf5c-2b98-48f3-975c-a529b2dcfe94/jordan.png" alt="" />
                        <div className='absolute left-10 bottom-10 flex flex-col gap-5 '>
                            <h3 className='uppercase text-white text-3xl *:'>Air Jordan 1 <br  className='sm:hidden'/>MMV3 Low</h3>
                            <button className='bg-white text-black rounded-full p-2 px-4  hover:bg-[#707072] cursor-pointer self-start'>Shop</button>

                        </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
                    <Link to="/products/jordan/kids" state={{title: "Jordan Kids Products"}} className='relative sm:w-[50%]'>
                        <img  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_765,c_limit/fd976db6-4983-4693-bf4e-9056f64b46f7/jordan.png" alt="" />
                        <div className='absolute left-10 bottom-10 flex flex-col gap-1 '>
                            <p className='text-white text-lg '>Confident Era</p>
                            <h3 className='uppercase text-white text-3xl '>she rules. keep up.</h3>
                            <button className='bg-white text-black rounded-full p-2 px-4 mt-4  hover:bg-[#707072] cursor-pointer self-start'>Shop</button>
                        </div>
                    </Link>
                    <Link to="/products/jordan/training" state={{title: "Jordan Training shoes"}} className='relative sm:w-[50%]'>
                        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_589,c_limit/492c0ed5-7e66-4582-8c99-b123f024b865/jordan.png" alt="" />
                        <div className='absolute left-10 bottom-10 flex flex-col gap-1 '>
                            <p className='text-white text-lg '>Air Jordan 4RM</p>
                            <h3 className='uppercase text-white text-3xl '>ride easy</h3>
                            <button className='bg-white text-black rounded-full p-2 px-4 mt-4  hover:bg-[#707072] cursor-pointer self-start'>Shop</button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>


        <section>
            <div className="flex justify-between items-center mx-5 mt-15 mb-5">
                <h2 className="text-2xl px-8 font-thin uppercase text-white font-[helveticaNow]">on trend</h2>
                <div className="hidden sm:flex gap-3">
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
                

            </div>

            <div className="mx-10">
                <div ref={scrollRef} className="flex overflow-x-scroll gap-4 pb-4 custom-scrollbar">
                {productsInUse.map((el,idx) => (
                      <div
                        key={el.id}
                        className="flex-shrink-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-1/3"
                      >
                        <Link  to={`/details/${el.id}`}><Card
                          categories={el.categories}
                          color={el.colors}
                          price={el.price}
                          name={el.name}
                          gender={el.genders}
                          image={el.image}
                        /></Link>
                      </div>
                    ))}
                  </div>
                </div>


        </section>


        <section className='font-[helveticaNow] mx-5 mt-10'>
            <h2 className="text-2xl  pb-6 font-thin uppercase text-white ">shop</h2>
            <div className='flex gap-4 overflow-x-scroll sm:overflow-x-hidden'>
                <Link to="/products/jordan/men" state={{title: "Jordan Men Products"}} className='flex flex-col gap-3 min-w-[70%] sm:min-w-0'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_707,c_limit/92abb27b-46f5-4e9d-8d0a-c64191410829/jordan.jpg" alt="" />
                    <span className='text-white text-lg uppercase'>mens</span>
                </Link>
                 
                <Link to="/products/jordan/women" state={{title: "Jordan Women Products"}} className='flex flex-col gap-3 min-w-[70%] sm:min-w-0'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_586,c_limit/9f7b46c2-95e8-4b38-970a-d90998e5ae87/jordan.jpg" alt="" />
                    <span className='text-white text-lg uppercase'>womens</span>
                </Link>

                <Link to="/products/jordan/kids" state={{title: "Jordan Kids products"}} className='flex flex-col gap-3 min-w-[70%] sm:min-w-0'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_586,c_limit/477edaa4-c231-4027-ab28-3c6055a4318d/jordan.jpg" alt="" />
                    <span className='text-white text-lg uppercase'>kids</span>
                </Link>
            </div>
        </section>

        </div>
    </>
  )
}

export default Jordan