import React from 'react';
import styled from 'styled-components';

const CategoryItemImage = styled.img`
  width: 110%;
  position: absolute;
  bottom: 120px;
`;
const CategoryItemDescription = styled.h3`
  position: absolute;
  bottom: 40px;
`;

const CategoryItem = (props) => {
  const { id, title } = props;
  return (
    <>
      <CategoryItemImage
        src={
          process.env.PUBLIC_URL +
          `img/products/${id}.png`
        }
      />
      <CategoryItemDescription>
        {title}
      </CategoryItemDescription>
    </>
  );
};

export default CategoryItem;
