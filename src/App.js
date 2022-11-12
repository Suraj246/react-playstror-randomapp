import './App.css';
import Header from './components/Header'
import Services from './components/Services'
import PopularServiceProducts from './components/PopularServiceProducts'
import AllServices from './components/AllServices'
import Footer from './components/Footer'
import Slider from './components/Slider'
function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <PopularServiceProducts />
      <AllServices />
      <Footer />
    </div>
  );
}

export default App;
