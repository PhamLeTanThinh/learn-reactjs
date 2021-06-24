import './App.css';
import Header from './component/Header';
import Product from './component/Product';
import Databinding from './component/Databinding';
import Event from './component/Event';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Product />
      </div>
      <Databinding/>
      <Event/>
      <h1>hello Bou</h1>
    </div>
  );
}

export default App;
