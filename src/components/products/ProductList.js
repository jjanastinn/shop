import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

async function fetchData(fnSuccess, fnError) {
  const res = await fetch("/products.json");
  res
    .json()
    .then(res => fnSuccess(res))
    .catch(err => fnError(err));
}

const ProductList = () => {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetchData(setProducts, setErrors);
  }, []);

  return (
    <ul className="product-grid">
      {
        products.map((p, index) => <ProductCard key={index} product={p} />)
      }
    </ul>
  );
};

export default ProductList;