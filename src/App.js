import './App.css';
import Banner from './Components/Banner/Banner';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Newsletter from './Components/Newsletter/Newsletter';
import Spaceship from './Components/Spaceship/Spaceship';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner />
      <Discover />
      <Spaceship />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
