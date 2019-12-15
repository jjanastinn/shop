import React from 'react';

const ProductCard = (props) => {
  return (
    <li>
      <img src={props.product.images && props.product.images[0]} alt=""/>
      <div className="product-info">
        <p>{props.product.brand}</p>
        <p className="product-description">{props.product.description}</p>
        <div className="product-price">
          {props.product.priceR ? (<p className="product-price-reduced">{props.product.priceR}</p>) : null}
          <p>{props.product.priceO}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;