import Navigation from './assets/components/home/Navigation';
import './App.css';
import HeroPage from './assets/components/home/HeroPage';
import AboutSection from './assets/components/home/AboutSection';
import Gallery from './assets/components/home/Gallery';
import Contact from './assets/components/home/Contact';
import Footer from './assets/components/home/Footer';

function App() {
  
  
  return (
    <>
      <Navigation />
      <HeroPage />
      <AboutSection />
      <Gallery />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;