import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Friends from './Components/Friends/Friends';

function App() {
  return (
    <div className="App">
      <h1>This Site made for Learning React Routing</h1>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
