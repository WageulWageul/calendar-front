import './App.css';
import Home from './comp/home/Home';
import Login from './comp/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '././index.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
