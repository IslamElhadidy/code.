import Clients from './Components/Clients/Clients';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero.jsx/Hero';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pircing/Pricing';
import Questions from './Components/Questions/Questions';
import Services from './Components/Services/Services';
import Updates from './Components/Updates/Updates';
import './index.css'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <Clients />
        <Updates />
        <Questions />
        <Footer />
    </div>
  );
}

export default App;
