import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import MainContent from './components/MainContent';

const AppWrapper = styled.div`
  display: flex;
  width: var(--dashboardWidth);
  height: var(--dashboardHeight);
  background-color: rgb(240, 240, 240);
  margin: calc((100vh - var(--dashboardHeight)) / 2)
    auto;
  border-radius: var(--dashboardRadius);
`;

const paths = ['About', 'Products', 'Contact Us'];

function App() {
  return (
    <AppWrapper className="App">
      <Router>
        <Navbar paths={paths} className="navbar" />
        <MainContent />
      </Router>
    </AppWrapper>
  );
}

export default App;
