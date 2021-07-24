import React from 'react';
import styled from 'styled-components';

const Banner = (props) => {
  const { text, color, src, size, textColor } = props;

  const BannerWrapper = styled.div`
    border-radius: var(--dashboardRadius);
    width: ${size === 'sm'
      ? '300px'
      : size === 'md'
      ? '400px'
      : '550px'};
    display: flex;
    align-items: center;
    background-color: ${color};
    margin: 1rem 0;
    cursor: pointer;
  `;

  const Image = styled.img`
    width: 65%;
    border-radius: var(--dashboardRadius) 0 0
      var(--dashboardRadius);
  `;

  const Text = styled.p`
    padding: 20px;
    color: ${textColor};
  `;

  return (
    <BannerWrapper>
      <Image
        src={process.env.PUBLIC_URL + `/img/${src}`}
        alt={text}
      />
      <Text>{text}</Text>
    </BannerWrapper>
  );
};

export default Banner;
