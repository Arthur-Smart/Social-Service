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
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Account from './pages/account/Account';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Jobs from './pages/jobs/Jobs';



function App() {

  const queryClient = new QueryClient()
  const Layout = () =>{
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </QueryClientProvider>
      </>
    )
  }

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/job/:id",
        element:<JobPage/>
      },
      {
        path:"/engagements",
        element:<Engagements/>
      },
      {
        path:"/jobs",
        element:<Jobs/>
      },
      {
        path:"/engagement/:id",
        element:<Engagement/>
      },
      {
        path:"/messages",
        element:<Messages/>
      },
      {
        path:"/message/:id",
        element:<Chat/>
      },
      {
        path:"/create-job",
        element:< CreateJob/>
      },
      {
        path:"/create",
        element:<Create/>
      },
       {
        path:"/account/:id",
        element:<Account/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
    ]
  },
]);

  return (
    <div className="App">
           <RouterProvider router={router} />
    </div>
  );
}

export default App;
