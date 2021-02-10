import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavbarComponet from './Components/Navbar/NavbarComponent.jsx';
import HomeComponet from './Pages/Home/Container.jsx';

function App() {
  return (
    <Router>
      <NavbarComponet name="TestTravels"/>
      <Switch>
        <Route path="/" component={HomeComponet}></Route>
      </Switch>
    </Router>
  );
}

export default App;
