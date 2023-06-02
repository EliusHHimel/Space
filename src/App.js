import './App.css';
import Banner from './Components/Banner/Banner';
import Discover from './Components/Discover/Discover';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner />
      <Discover />
    </div>
  );
}

export default App;
