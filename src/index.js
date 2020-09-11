import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


// const routing = (
//     <div>
//         <Router>
//             <ul>
//                 <li>
//                     <NavLink to = "/">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = "/users">Users</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = "/cars">Cars</NavLink>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path = '/' component = {App}/>
//                 <Route path = '/users' component = {App}/>
//             </Switch>
//         </Router>
//     </div>
// )

ReactDOM.render(<App />, document.getElementById('root'));