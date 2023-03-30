import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Counter from './components/Counter';
import ShowDataInGrid from './components/DataGrid';
import Register from './components/Register';
import Header from './components/Header';


function App() {


  return (

    <div className='App'>
      <h1> Home Page</h1>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" exact element={<Counter />} />
          <Route path="/dataGrid" exact element={<ShowDataInGrid />} />
          <Route path="/addData" exact element={<Register />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
