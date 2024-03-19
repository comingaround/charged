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
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "lv", name: "Latvian" },
  ];
  const getCurrentLanguageName = () => {
    const currentLanguage = languages.find(lang => lang.code === i18n.language);
    return currentLanguage ? currentLanguage.name : "Unknown Language";
  };


  return (
    <>
      <Navbar />
      <h1 style={{color:"green"}}>{t("Services")}</h1>
      <div className="lang_section">
        <h3>Current language: {getCurrentLanguageName()}</h3>
        <div className="lang_buttons">
          {languages.map((language) => (
            <button
              onClick={() => i18n.changeLanguage(language.code)}
              key={language.code}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
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