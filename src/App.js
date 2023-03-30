import './App.css';
import Counter from './components/Counter';
import ShowDataInGrid from './components/DataGrid';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <h1> Home</h1>
      <a href='Counter'> conter</a>
      <Counter/>
      <ShowDataInGrid/>
      <Register/>
    </div>

  );
}

export default App;
