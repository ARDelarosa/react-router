
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <div id="container">
       <Link to="/">Home</Link>
      <h1>Pick a color...</h1>
      <Navbar />
      <MainSection />
      <Footer />
    </div>
    </>
  );
}

export default App;
