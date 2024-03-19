import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Franchise from './routes/Franchise';
import Locations from './routes/Locations';
import Taxi from './routes/Taxi';
import Driver from './routes/Driver';
import Navbar from './components/general/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/taxi' element={<Taxi />} />
        <Route path='/driver' element={<Driver />} />
      </Routes>
    </>
  );
}

export default App;