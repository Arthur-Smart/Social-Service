import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Chat from './pages/chat/Chat';
import Create from './pages/create/Create';
import CreateJob from './pages/createjob/CreateJob';
import Engagement from './pages/engagement/Engagement';
import Engagements from './pages/engagements/Engagements';
import Home from './pages/home/Home';
import JobPage from './pages/jobpage/JobPage';
import Messages from './pages/messages/Messages';

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
