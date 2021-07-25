import React from 'react';
import styled from 'styled-components';

const StatisticsWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const StatisticsData = styled.div`
  font-size: 1.7rem;
`;
const StatisticsTitle = styled.h2`
  font-size: 1.9rem;
`;

const Statistics = (props) => {
  const { title, data } = props;
  return (
    <StatisticsWrapper>
      <StatisticsData>{data}</StatisticsData>
      <StatisticsTitle>{title}</StatisticsTitle>
    </StatisticsWrapper>
  );
};

export default Statistics;
