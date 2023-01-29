import {Routes, Route} from 'react-router-dom';
import HomePage from './components/Homepage';
import Login from './components/Login';
import Market from './components/Market';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/market" element={<Market />} />
    </Routes>
  );
}

export default App;
