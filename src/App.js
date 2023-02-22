import './App.css';
import Index from './components/Index';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Index />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
