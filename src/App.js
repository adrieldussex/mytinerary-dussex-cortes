import './App.css';
import Hero from './pages/Hero';
import Cities from './pages/Cities';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/cities' element={<Cities />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
