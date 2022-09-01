import './App.css';
import Hero from './pages/Hero';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import WebsiteLayout from './layouts/WebsiteLayout';
import CityDetails from './components/CityDetails'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import EditCity from './pages/EditCity';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/cities' element={<Cities />}/>
          <Route path='/newcity' element={<NewCity />}/>
          <Route path='/*' element={<UnderConstruction />}/>
          <Route path='/details' element={<CityDetails />}/>
          <Route path='/editcity' element={<EditCity />}/>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
