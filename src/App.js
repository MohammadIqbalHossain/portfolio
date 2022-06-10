import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import AllProjects from './components/AllProjects/AllProjects';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/allProjects' element={<AllProjects />}></Route>
       </Routes>
    </div>
  );
}

export default App;
