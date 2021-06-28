import './App.css';
import AlbumList from './component/Album/component/AlbumList/index';
import TodoList from './component/ToDoList/index';



function App() {
  return (
    <div className="App">
      {/* <Header />
      <div className="container">
        <Product />
      </div>
      <Databinding/>
      <Event/>
      <h1>hello Bou</h1> */}
      <AlbumList/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;
