import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Partner from './components/Partner';
import More from './components/More';
import Services from './components/Services';
import Results from './components/Results';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Partner />
      <More />
      <Services />
      <Results/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
