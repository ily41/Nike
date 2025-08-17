import { useContext, useEffect, useState } from 'react';
import data from '../provider/navigation.json'
import { Link } from 'react-router';
import { JordanContext } from '../provider/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [hoveredItem, sethoveredItem] = useState(null)
  const {jordanState} = useContext(JordanContext)
  const [burgerBool, setBurgerBool] = useState(false)
  const [burgerPagination,setBurgerPagination] = useState("all")



  useEffect(() => {
  if (burgerBool) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
  }
  
  return () => {
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
  };
}, [burgerBool]);

const renderMenu = () => {
  if (burgerPagination === "all") {
    console.log("all works")
    data.map(item => console.log(item))
    return data.map((item, idx) => (
      <div
        key={idx}
        className="flex items-center cursor-pointer justify-between"
        onClick={() => {
          setBurgerPagination(item.slug) 
          console.log("slugitem")
          console.log(item.slug)}}
      >
        <h1 className="text-2xl ">{item.name}</h1>
        <img className="w-7 h-7" src="../public/Icons/right-arrow.svg" alt="" />
      </div>
    ));
  }

  const mainCat = data.find(cat => cat.slug === burgerPagination);
  if (mainCat) {
    return mainCat.subCategories.map((subCat, idx) => (
      <div
        key={idx}
        className="flex items-center cursor-pointer justify-between"
        onClick={() => setBurgerPagination(`${mainCat.slug}-${subCat.slug}`)} 
      >
        <h1 className="text-lg text-[#707072] ">{subCat.title}</h1>
        <img className="w-7 h-7" src="../public/Icons/right-arrow.svg" alt="" />
      </div>
    ));
  }

  if (burgerPagination.includes('-')) {
    const [mainSlug, subSlug] = burgerPagination.split('-');
    const mainCategory = data.find(cat => cat.slug === mainSlug);
    const subCategory = mainCategory?.subCategories.find(sc => sc.slug === subSlug);

    if (subCategory) {
      return subCategory.categories.map((c, idx) => (
        <Link to={`/products/${c.slug}`} key={idx}>
          <div
            className="flex items-center cursor-pointer justify-between"
            onClick={() => {
              setBurgerBool(false);
              setBurgerPagination("all");
            }}
          >
            <h1 className="text-lg text-[#707072] ">{c.name}</h1>
          </div>
        </Link>
      ));
    }
  }

  return null;
};






  return (
    <header className='z-[51]'>
      {/* Top Nav */}
      <div className={`${jordanState ? 'dark bg-[#111111] text-white' : 'bg-[#F5F5F5] text-black'} hidden lg:flex  justify-between px-8 py-2`}>
        <ul className=' flex gap-4 '>
          {jordanState ? 
            <>
              <li><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z" clip-rule="evenodd"></path></svg></li>
              <li><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.045 10.99V7.73L6.19 10.37 3.115 9.35l1.94 2.64-1.905 2.64 3.045-1.005 1.855 2.64v-3.26l3.11-1.02-3.115-.995zm12.84 1.02l-6.82 7.49H8.21l6.825-7.49L8.21 4.5h5.856l6.819 7.51z" clip-rule="evenodd"></path></svg></li>
            </>
            :
            <>
              <li><img className = "h-6 w-6" src="/Icons/Home-top-logo2.svg" alt="" /></li>
              <li><img className = "h-6 w-6" src="/Icons/Home-top-logo.svg" alt="" /></li>
            </>
          }
            
        </ul>

        <ul className='flex items-center gap-3 text-xs font-semibold'>
            <li className='border-r-1 pr-2'>Find a Store</li>
            <li className='border-r-1 pr-2'>Help</li>
            <li className='border-r-1 pr-2'>Join Us</li>
            <li>Sign In</li>
        </ul>
      </div >
      <nav className={` sticky ${jordanState ? 'dark bg-[#1F1F21] text-white' : 'bg-white text-black'} top-0 flex justify-between `}>
 
          {/* logo */}
          <div className='pl-6 pr-0 sm:px-8 py-3 flex flex-1 items-center'>
            <div className='pl-6 pr-0 sm:px-8 py-3 flex flex-1 items-center'>
              <Link to='/'>
                {jordanState ? 
                <svg  class="swoosh-svg" width="64" height="22" viewBox="0 0 64 22" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7277 12.1511C15.999 12.598 14.4241 12.8196 13.0469 12.8196C11.3396 12.8196 9.94617 12.4728 8.97074 11.7793C4.02962 8.28845 8.54956 0.885548 9.06118 0.0629324C6.88551 2.37923 4.65235 4.80341 2.89851 7.44593C-0.0575023 11.9597 -0.812655 16.2475 0.910825 18.906C2.23896 20.9642 4.40042 22 7.37517 22C10.0146 22 13.2975 21.1832 17.1928 19.5559L64 0.0173385L63.9981 0L17.7277 12.1511Z" fill="white"/></svg> : <img className='cursor-pointer' src="/Icons/Logo.svg" alt="Logo" />}
              </Link>
            </div>

          </div>

          <div className='flex flex-1  items-stretch justify-center'>
            <ul className=' font-semibold hidden lg:flex cursor-pointer'>
              {data.map((item,idx) => (
                
                <div
                  key={idx}
                  onMouseEnter={() => {sethoveredItem(idx)}}
                  onMouseLeave={() => {sethoveredItem(null)}}
                  className='flex items-center'
                >
                  <Link to={`/${item.slug}`}>
                    <li
                      className='relative pb-1 px-2 hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-11/12 hover:after:bg-black hover:after:translate-y-[4px]'
                    > 
                    {item.name} 
                    </li>

                  </Link>
                </div>
              ))}              
            </ul>
          </div>

          <div className='flex px-8 py-3 flex-1  items-center justify-end gap-2'>

          {jordanState ? 
            <svg aria-hidden="true" className='lg:hidden' focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
            :
            <img src="/Icons/Search-icon.svg" className='lg:hidden' alt="Search" />
          }
              <div className='relative'>
              <input
                type="text"
                placeholder="Search"
                className={`${jordanState 
                  ? 'dark bg-black text-white hover:bg-[#39393B]' 
                  : 'bg-[#f5f5f5] text-black hover:bg-[#e5e5e5]'} hidden lg:block placeholder:pl-9 rounded-4xl p-2`} 
              />

                <div className={`absolute top-0 p-2 rounded-[50%] hidden lg:block ${jordanState ? 'dark bg-black text-white' : 'bg-[#f5f5f5] text-black'}`}>
                  {jordanState ? 
                    <svg aria-hidden="true"  focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                    :
                    <img src="/Icons/Search-icon.svg"  alt="Search" />
                  }
                </div>
              </div>
          <Link to='/favorites'>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path><title>non-filled</title></svg>
          </Link>
          <Link to='/cart'>
          {jordanState ? 
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
            :
            <img  src="/Icons/basket-icon.svg" className='cursor-pointer' alt="Basket" />

          }
          </Link>
          
          <svg onClick={() => setBurgerBool(prev => !prev)} className = "lg:hidden" aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
            <path stroke="currentColor" strokeWidth="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
          </svg>

          
          </div>
          {burgerBool && (
            <>
              <div onClick={() => setBurgerBool(false)} className='absolute lg:hidden top-0 left-0 w-screen h-screen bg-black opacity-40 overflow-hidden'>
              </div>
              <div className={`absolute ${jordanState ?  'dark bg-[#1F1F21]': 'bg-white'} lg:hidden font-[helveticaNow] right-0 top-0 z-[10000] bg-opacity-[100] h-screen w-80`}>


                <div>
                  <div onClick={() => {}} className='absolute hidden items-center  top-4 left-6  lg:flex gap-3'>
                    <img className='w-7 h-7' src="../public/Icons/left-arrow.svg" alt="" />
                    <span>All</span>
                  </div>
                  <button
                    onClick={() => {setBurgerBool(false); setBurgerPagination("all")}}
                    className='p-2 absolute top-4 right-6'
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className='w-6 h-6 text-gray-600'
                    />
                  </button>
                </div>

                <div className='mt-40 mx-10 flex flex-col  gap-4'>
                  
                  <Link to={`/${burgerPagination}`}>
                      <h1 onClick={() => {setBurgerBool(false); setBurgerPagination("all")}} className="cursor-pointer text-2xl mb-7">
                        {burgerPagination === "all"
                          ? ""
                          : data.find(el => el.slug === burgerPagination)?.name ||
                            data
                              .find(el => el.subCategories.some(sc => sc.slug === burgerPagination))
                              ?.subCategories.find(sc => sc.slug === burgerPagination)?.title}
                      </h1>
                    </Link>

                  {renderMenu()}
                  

                  
                </div>

                
              </div>
            </>
            
          )}




        {hoveredItem !== null && hoveredItem !== undefined  && 
        <div 
        onMouseEnter={() => {sethoveredItem(hoveredItem)}}
        onMouseLeave={() => {sethoveredItem(null)}}
        className={`absolute  left-0  z-1000 w-screen flex justify-center items-start py-10 ${jordanState ? 'dark bg-[#1F1F21] text-white top-30' : 'bg-white text-black top-16'}`}>
          {data[hoveredItem].subCategories.map((item,idx) => {
            return (
              <div className='px-12' key={idx}>
                <h5 className='font-semibold cursor-pointer mb-3'><Link to ='/products'>{item.title}</Link ></h5>
                <ul>
                  {item.categories.map((link,idx) => {
                        return (
                          <li 
                            key={idx} 
                            className='text-sm py-1 cursor-pointer hover:text-black font-[helveticaNow] text-[#707072]'
                          >                     
                          <Link to={`/products/${data[hoveredItem].slug}/${link.slug}`} state={{ title: link.name}}>
                            {link.name}
                          </Link>
                          </li>
                        );
                      })}

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
