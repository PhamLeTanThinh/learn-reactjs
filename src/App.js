import './App.css';
import CounterFetures from './features/Counter/index';
import { Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound/index';
import TodoFeature from 'features/Todo';
import Header from './component/Header/index'

function App() {

  return (
    <div className="App"> 
      <Header />

      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/counter" component={CounterFetures} />

        <Route component={NotFound}/>
      </Switch>


      Footer
    </div>
  );
}

export default App;
