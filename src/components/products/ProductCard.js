import React from 'react';

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.product.thumbnailUrl} alt=""/>
    </div>
  );
};

export default ProductCard;