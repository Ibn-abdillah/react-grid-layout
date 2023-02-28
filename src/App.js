
import './App.css';
import Best from './components/best/best';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Feature from './components/features/feature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Best />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
