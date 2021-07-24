import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import Banner from './Banner';

const HomeWrapper = styled.div`
  margin: 20px auto;
  padding: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--dashboardRadius);
  background-color: var(--lightGray);
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Welcome />
      <Banner
        text="The best food for the best creatures"
        color="#f4cfc6"
        textColor="black"
        src="pinkDogFace.jpg"
        size="md"
        // sizes: sm, md, lg
      />
      <Banner
        text="Purrrs that last for days"
        color="#010101"
        textColor="#fff"
        src="catBlackFace.jpg"
        size="sm"
      />
    </HomeWrapper>
  );
};

export default Home;
