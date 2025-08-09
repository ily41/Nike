import React from 'react';
import colordata from '../provider/products.json';

const Colors = () => {
  console.log(colordata);

  return (
    <div className='grid grid-cols-10'>
      {colordata.map(el => (
        <img key={el.id} src={el.image} alt={el.name} />
      ))}
    </div>
  );
};

export default Colors;
