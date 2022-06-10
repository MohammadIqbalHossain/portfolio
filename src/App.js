import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import AllProjects from './components/AllProjects/AllProjects';
import Details from './components/AllProjects/ProjectDetails/Details';
import Contact from './components/ContactMe/Contact';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/allProjects' element={<AllProjects />}></Route>
         <Route path='/details/:id' element={<Details />}></Route>
       </Routes>
       <Contact />
    </div>
  );
}

export default App;
