import './App.css';
import AlbumList from './component/Album/component/AlbumList/index';
import TodoList from './component/ToDoList/index';
import { useEffect } from 'react';
import productApi from './api/productApi';
import PracticePropState from './component/PracticePropState/PracticePropState';



function App() {

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };

  //   fetchProducts();
  // }, [])

  return (
    <div className="App">
      {/* <Header />
      <div className="container">
        <Product />
      </div>
      <Databinding/>
      <Event/>
      <h1>hello Bou</h1> */}
      {/* <AlbumList/>
      <hr/>
      <TodoList/> */}
      <PracticePropState/>
    </div>
  );
}

export default App;
