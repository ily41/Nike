import React, { useContext } from 'react';
import { FilterContext } from '../../provider/context';


const Favorites = () => {
  const { favoritesData, setFavorites } = useContext(FilterContext);

  const updateFavorite = (id) => {
    setFavorites(prev =>
      prev.some(item => item.id === id)
        ? prev.filter(item => item.id !== id)
        : prev
    );
  };

  return (
    <div className='font-[helveticaNow] mx-10'>
      <div>
        <h3 className='text-2xl'>Favorites</h3>
      </div>
      <div className='grid grid-cols-2 mt-7 lg:grid-cols-3 gap-4 min-h-[50vh]'>










        
        {favoritesData.length === 0 ? (
          <h3 className='text-3xl'>No items found</h3>
        ) : (
          favoritesData.map((item, idx) => (
            <div key={idx} className='flex flex-col relative'>
              <img src={item.image} alt={item.name} />
              <div className='flex mt-4 justify-between'>
                <span className='capitalize'>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <span className='text-[#757575]'>{item.gender}'s Shoes</span>
              {/* <Link to='/cart'>
                <button className='p-2 px-6 mt-5 self-start rounded-3xl border-1 border-[#CCCCCC] max-w-[458px]'>
                  Add to Bag
                </button>
              </Link> */}
              <button
                className='absolute right-5 top-5 p-2 bg-white rounded-[50%]'
                onClick={() => updateFavorite(item.id)}
              >
                {favoritesData.some(fav => fav.id === item.id) ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                  >
                    <path
                      fillRule='evenodd'
                      d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451L12 6.492l1.29-1.291a4.926 4.926 0 013.504-1.451z"
                      clipRule='evenodd'
                    ></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451L12 6.492l1.29-1.291a4.926 4.926 0 013.504-1.451z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
