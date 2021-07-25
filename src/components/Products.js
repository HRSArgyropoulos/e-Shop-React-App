import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const ProductsWrapper = styled.div`
  margin: 20px auto;
  padding: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: var(--dashboardRadius);
  background-color: var(--lightGray);
`;

const CategoriesWrapper = styled.ul`
  display: flex;
  justify-content: center;
`;

const Category = styled.li`
  background-color: white;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border-radius: 40% 50px;
  top: 70%;
  position: relative;
  min-height: 300px;
  width: 250px;
  cursor: pointer;
`;

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // abort controller if component is unmounted (not to update state)
    const abortContr = new AbortController();
    // fake timeout fetch time
    setTimeout(() => {
      fetch('data/categories.json', {
        signal: abortContr.signal,
      })
        .then((response) => response.json())
        .then((categories) => {
          setCategories(categories);
        })
        .catch((err) => console.log(err));
    }, 2 * 1000);
    // on unmount / cleanup -> abort the fetch
    return () => abortContr.abort();
  }, []);

  return (
    <ProductsWrapper>
      <CategoriesWrapper>
        {categories &&
          categories.map((category) => (
            <Category key={category.id}>
              <CategoryItem {...category} />
            </Category>
          ))}
      </CategoriesWrapper>
    </ProductsWrapper>
  );
};

export default Products;
