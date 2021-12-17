import Mylist from './Mylist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Addtask from './Addtask';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={'/'}>
            <Mylist />
          </Route>
          <Route path={'/Addtask'}>
            <Addtask />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
