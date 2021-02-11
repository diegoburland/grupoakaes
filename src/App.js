import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavbarComponet from './Components/Navbar/NavbarComponent.jsx';
import HomeComponet from './Pages/Home/Container.jsx';



function App() {

  const [company, setCompany] = useState('');

  const handleLink = (e) => {
    e.preventDefault();
    const value = e.target.text;
    setCompany(value);
  }

  return (
    <Router>
      <NavbarComponet name="TestTravels" handleLink={handleLink}/>
      <Switch>
        <Route path="/" render={(props) => <HomeComponet {...props} company={company} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
