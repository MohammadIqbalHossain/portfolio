import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import AllProjects from './components/AllProjects/AllProjects';
import Details from './components/AllProjects/ProjectDetails/Details';
import Contact from './components/ContactMe/Contact';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/allProjects' element={<AllProjects />}></Route>
         <Route path='/details/:id' element={<Details />}></Route>
         <Route path='/blogs' element={<Blogs />}></Route>
       </Routes>
       <Contact />
    </div>
  );
}

export default App;
