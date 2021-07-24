import React from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.div`
  margin: 2rem 0;
`;

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <h1>Welcome to DogTown 🐕</h1>
      <span>*Woof Woof*</span>
    </WelcomeWrapper>
  );
};

export default Welcome;
