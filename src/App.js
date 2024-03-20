import { Routes, Route } from 'react-router-dom';
import Navbar from './components/general/navbar/navbar';
import Footer from './components/general/footer/footer';
import Home from './routes/Home';
import About from './routes/About';
import Franchise from './routes/Franchise';
import Locations from './routes/Locations';
import Taxi from './routes/Taxi';
import Driver from './routes/Driver';
import Support from './routes/Support';
import Terms from './routes/Terms';
import Privacy from './routes/Privacy';
import Safety from './routes/Safety';

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
        <Route path='/support' element={<Support />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/safety' element={<Safety />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;