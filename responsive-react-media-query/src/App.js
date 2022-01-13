import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
function App() {

  return (
    <div>
      <Router>

        <Switch>

          <Route path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
