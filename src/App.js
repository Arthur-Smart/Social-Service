import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Engagement from './pages/engagement/Engagement';
import Engagements from './pages/engagements/Engagements';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
