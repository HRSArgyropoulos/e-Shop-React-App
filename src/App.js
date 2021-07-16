import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar
            paths={['About', 'Products', 'Contact Us']}
            className="navbar"
          />
        </header>
      </Router>
    </div>
  );
}

export default App;
