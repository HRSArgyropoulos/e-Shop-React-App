import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import Banner from './Banner';
import Statistics from './Statistics';

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

const InlineBanners = styled.ul`
  list-style: none;
  display: flex;
`;

const StatisticsWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Welcome />
      <InlineBanners>
        <Banner
          text="The best food for the best creatures"
          color="#f4cfc6"
          textColor="black"
          src="pinkDogFace.jpg"
          size="lg"
          // sizes: sm, md, lg
        />
        <Banner
          text="Toys your dog or cat will not be able to leave alone"
          color="white"
          textColor="black"
          src="dogToy.jpg"
          size="lg"
        />
      </InlineBanners>
      <InlineBanners>
        <Banner
          text="Purrrs that last for days"
          color="#010101"
          textColor="#fff"
          src="catBlackFace.jpg"
          size="sm"
        />
        <Banner
          text="Waterproof coats for them rainy days"
          color="rgb(187, 186, 185)"
          textColor="black"
          src="greyDogFace.jpg"
          size="sm"
        />
        <Banner
          text="Stylish berets for your frenchies"
          color="#ef2b1b"
          textColor="white"
          src="redDogSide.jpg"
          size="sm"
        />
      </InlineBanners>
      <StatisticsWrapper>
        <Statistics title="Chemicals" data="0%" />
        <Statistics title="Satisfaction" data="96%" />
        <Statistics title="Products" data="5600+" />
      </StatisticsWrapper>
    </HomeWrapper>
  );
};

export default Home;
