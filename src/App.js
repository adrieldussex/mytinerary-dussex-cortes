import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import CitiesCarousel from './components/CitiesCarousel'


function App() {
  return (
    <div>
      < Hero />
      < CitiesCarousel />
      < Footer />
    </div>
  );
}

export default App;
