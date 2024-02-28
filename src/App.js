import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<>
            <Header />
            <Checkout />
          </>}>
          </Route>

          <Route path='/login' element={<>
            <Login />
          </>}></Route>

          <Route path='/' element={<>
            <Header />
            <Home />
          </>}></Route>
        </Routes>
      </div>
    </Router >

  );
}

export default App;
