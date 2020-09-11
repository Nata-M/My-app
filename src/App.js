import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Cars from './components/Cars'
import './App.css';
import './css/navbar.css';
import './css/content.css'
import CreateUser from './components/CreateUser'
import UsersList from './components/UsersList'
import Mysearch from './components/Search'
import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CarContent from './Car-components/CarContent'
import Home from './components/home'


class App extends React.Component {
  render () {
    return (
    <div className="App">
    <Router>
      <ul>
        <li>
        <NavLink to = "/" className = 'navlink'>მთავარი</NavLink>
        </li>
        <li>
        <NavLink to = "/users" className = 'navlink'>მომხმარებლები</NavLink>
        </li>
        <li>
        <NavLink to = "/cars" className = 'navlink' >ავტომობილები</NavLink>
        </li>
      </ul>
      <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/users" component = {Content} />
      <Route path="/cars" component = {CarContent} />
     </Switch>
     </Router>
    </div>
  );
}
}
export default App;