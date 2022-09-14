import './App.css';
import Hero from './pages/Hero';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import WebsiteLayout from './layouts/WebsiteLayout';
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import EditCity from './pages/EditCity';
import City from './pages/City';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MyTinerares from './pages/MyTinerares';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/mytineraries' element={<MyTinerares />}/>
          <Route path='/auth/signup' element={<SignUp />}/>
          <Route path='/auth/signin' element={<SignIn />}/>
          <Route path='/cities' element={<Cities />}/>
          <Route path='/newcity' element={<NewCity />}/>
          {/* <Route path='/*' element={<UnderConstruction />}/> */}
          <Route path='/cities/:id' element={<City />}/>
          <Route path='/editcity' element={<EditCity />}/>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
