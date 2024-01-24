import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/start' element={<Start />}></Route>
      </Routes>
    </>
  );
}

export default App;
