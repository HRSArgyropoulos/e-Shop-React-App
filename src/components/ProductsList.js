import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsList = () => {
  const { categoryId } = useParams();
  return (
    <h3>
      Showing products for category with id:
      {categoryId}
    </h3>
  );
};

export default ProductsList;
