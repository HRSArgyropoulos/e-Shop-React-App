import React from 'react';
import styled from 'styled-components';

const Banner = (props) => {
  const { text, color, src, size, textColor } = props;

  const BannerWrapper = styled.div`
    border-radius: var(--dashboardRadius);
    width: ${size === 'sm'
      ? '350px'
      : size === 'md'
      ? '450px'
      : '600px'};
    display: flex;
    align-items: center;
    background-color: ${color};
    margin: 1rem 0;
    cursor: pointer;
    margin-right: 1rem;
  `;

  const Image = styled.img`
    max-width: 60%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--dashboardRadius) 0 0
      var(--dashboardRadius);
  `;

  const Text = styled.p`
    padding: 15px;
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
