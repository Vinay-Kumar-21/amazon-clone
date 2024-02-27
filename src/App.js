import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<h1>checkout</h1>}>
          </Route>
          <Route path='/login' element={<h1>login</h1>}></Route>
          <Route path='/' element={<>
            <Header />
            <h1>Home Page!!!!!</h1>
          </>}></Route>
        </Routes>
      </div>
    </Router >

  );
}

export default App;
