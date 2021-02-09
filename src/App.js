import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeComponet from './Pages/Home/Container.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeComponet}></Route>
      </Switch>
    </Router>
  );
}

export default App;
