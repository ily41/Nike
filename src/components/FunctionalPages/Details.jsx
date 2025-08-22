import { useParams } from "react-router";
import Slider from "../UI/Slider";
import { useContext, useEffect, useRef, useState } from "react";
import productData from '../../provider/products.json';
import BagNotification from '../UI/BagNotification';
import { BasketContext, FilterContext } from "../../provider/context";

const Details = () => {
  const { bagNotification, setBagNotification, basket, setBasket } = useContext(BasketContext);
  const { setFavorites, favoritesData } = useContext(FilterContext);

  const { productId } = useParams();
  const product = productData.find(el => el.id == productId);

  const imgRef = useRef();
  const [imgHeight, setImgHeight] = useState(0);
  const [sizeChosen, setSizeChosen] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [isAddBag, setisAddBag] = useState(true)
  const [currentImage,setCurrentImage] = useState(product.image)

  console.log(favoritesData)

  // Add to bag
  const addToBag = () => {
    if (!sizeChosen) {
      setSizeError(true);
      return;
    }


    setBagNotification(true);
    setisAddBag(true)
    setSizeError(false);

    const existingItem = basket.find(g => g.id === product.id && g.size === sizeChosen);

    if (existingItem) {
      setBasket(prev =>
        prev.map(el =>
          el.id === product.id && el.size === sizeChosen
            ? { ...el, quantity: el.quantity + 1 }
            : el
        )
      );
    } else {
      setBasket(prev => [
        ...prev,
        {
          id: product.id,
          name: product.name,
          gender: product.genders,
          size: sizeChosen,
          price: product.price,
          image: product.image,
          availableSizesEU: product.availableSizesEU,
          sizeAvailability: product.sizeAvailability,
          quantity: 1
        }
      ]);
      
    }
  };

  // Update favorites
  const updateFavorites = () => {
    const isFavorite = favoritesData.some(fav => fav.id === product.id);

    if (isFavorite) {
      setFavorites(prev => prev.filter(el => el.id !== product.id));
    } else {
      setFavorites(prev => [
        ...prev,
        {
          id: product.id,
          name: product.name,
          gender: product.genders,
          price: product.price,
          image: product.image
        }
      ]);
      setisAddBag(false)
      setBagNotification(true)
      
    }
  };

  // Handle bag notification overflow
  useEffect(() => {
    if (!bagNotification) return;

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setBagNotification(false);
      document.body.style.overflow = '';
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [bagNotification]);

  // Update image height for scroll
  const updateImgHeight = () => {
    if (imgRef.current) setImgHeight(imgRef.current.clientHeight);
  };

  useEffect(() => {
    updateImgHeight();
    window.addEventListener("resize", updateImgHeight);
    return () => window.removeEventListener("resize", updateImgHeight);
  }, []);

  const handleImgLoad = () => updateImgHeight();

  const headerText = () => (
    <div className="m-5">
      <h3 className="font-[helveticaNow] text-xl">{product.name}</h3>
      <p className="text-[#818181] font-[helveticaNow] mb-4">{product.genders}'s Shoes</p>
      <span className="font-[helveticaNow]">{product.price}$</span>
    </div>
  );

  const isFavorite = favoritesData.some(fav => fav.id === product.id);

  return (
    <div>
      <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>
        Up to 50% Off Select Styles: Use code SPORT
      </div>

      <div className="lg:hidden">{headerText()}</div>

      <Slider header={false} productImages={product.detailImages}/>

      <div className="lg:flex  justify-center mt-10 mx-[100px]">
        {/* Left images */}
        <div className="inline-flex lg:h-[450px] lg:w-[530px] lg:sticky top-10 gap-2">
          <div className="order-2 relative lg:h-[450px]  hidden lg:block">

            <img
              onLoad={handleImgLoad}
              ref={imgRef}
              className="object-cover lg:max-w-[450px] lg:min-h-[450px] lg:h-[450px] lg:w-[450px] rounded-sm"
              src={currentImage}
              alt={product.name}
            />
          </div>

          <div style={{ maxHeight: imgHeight ? `${imgHeight}px` : "auto" }} className="order-1 scrollbar-hide overflow-y-scroll flex lg:flex-col">
            {product.detailImages.map((el, index) => (
              <img
                onMouseEnter={() => setCurrentImage(el)}
                key={index}
                className="lg:max-w-15 mb-2 o cursor-pointer hover:brightness-70 max-h-30 mx-1 rounded-sm"
                src={el}
                alt={`${product.name} detail ${index}`}
              />
            ))}
          </div>
        </div>

        {/* Right content */}
        <div className="mx-5 mt-7 lg:max-w-1/3">
          <div className="hidden lg:block">{headerText()}</div>

          <div className="flex justify-between w-full">
            <h5 className={`${sizeError ? 'text-red-500 ' : 'text-black'}`}>Select Size</h5>
            <h5 className="flex">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" strokeWidth="1.5" d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"></path>
                <path stroke="currentColor" strokeWidth="1.5" d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"></path>
              </svg>
              Size Guide
            </h5>
          </div>

          <div className={`custom-size-grid ${sizeError ? 'border-red-500 border-1 mb-2' : 'border-none'} my-5 gap-2`}>
            {product.availableSizesEU.map((el, index) => {
              const isAvailable = product.sizeAvailability[el];
              return isAvailable ? (
                <div
                  key={index}
                  onClick={() => { setSizeChosen(el); setSizeError(false); }}
                  className={`w-full py-4 bg-white border-1 flex justify-center items-center ${sizeChosen === el ? 'border-[#070707]' : 'border-[#d7d7d7]'} cursor-pointer hover:border-[#070707] rounded-sm`}
                >
                  <span className="font-[helveticaNow]">Size {el}</span>
                </div>
              ) : (
                <div
                  key={index}
                  className="w-full py-4 bg-[#F5F5F5] border-1 text-[#d7d7d7] line-through flex justify-center items-center border-[#d7d7d7] rounded-sm"
                >
                  <span className="font-[helveticaNow]">Size {el}</span>
                </div>
              );
            })}
          </div>

          <span className={`${sizeError ? 'block' : 'hidden'} font-[helveticaNow] text-red-500 whitespace-nowrap mb-3`}>
            Please select a size.
          </span>

          <button onClick={addToBag} className="w-full py-4 cursor-pointer rounded-4xl bg-black text-white font-[helveticaNow]">
            Add to Bag
          </button>

          <button onClick={updateFavorites} className="w-full py-4 flex gap-3 justify-center cursor-pointer items-center rounded-4xl text-black border-2 mt-2 mb-10 border-[#d7d7d7] font-[helveticaNow]">
            {!isFavorite ? (
              <>Favorite <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg></>
            ) : (
              <>Favorited <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fillRule="evenodd" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451L12 6.492l1.29-1.291a4.926 4.926 0 013.504-1.451z" clipRule="evenodd"></path></svg></>
            )}
          </button>

          <div className="mb-7">
            <h3 className="font-[helveticaNow]">Shipping</h3>
            <p>You'll see our shipping options at checkout</p>
          </div>

          <div className="mb-9">
            <h3 className="font-[helveticaNow]">Free Pickup</h3>
            <p className="pb-3 border-b-1 inline">Find a Store</p>
          </div>

          <div className="mb-5">
            <p className="mb-5">Familiar yet fresh, the Air Max Moto 2K is ready to go for a ride. Metallic accents compliment performance-inspired details and Max Air cushioning.</p>
            <ul className="list-disc ml-8">
              <li>Shown: White/Metallic Silver/Black/Pink Spell</li>
              <li>Style: HQ2056-101</li>
            </ul>
          </div>

          <h3 className="font-[helveticaNow] text-base border-b-1 pb-1 inline">View product Details</h3>

          <button className="w-full py-3 border-b-2 mt-5 border-[#d7d7d7]">
            <div className="flex justify-between">
              <h3 className="font-[helveticaNow] text-lg">Shipping & Returns</h3>
              <img className="w-6 h-6 object-cover" src="../public/Icons/down-arrow.svg" alt="" />
            </div>
          </button>

          <button className="w-full py-3 border-b-2 mt-5 border-[#d7d7d7]">
            <div className="flex justify-between">
              <h3 className="font-[helveticaNow] text-lg">Reviews(4)</h3>
              <img className="w-6 h-6 object-cover" src="../public/Icons/down-arrow.svg" alt="" />
            </div>
          </button>
        </div>
      </div>

      {bagNotification && <BagNotification setBagNotification={setBagNotification} product={product} sizeChosen={sizeChosen} isAddBag={!isAddBag} />}
    </div>
  );
};

export default Details;
