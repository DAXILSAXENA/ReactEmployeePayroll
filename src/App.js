import { BrowserRouter, Switch } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Dashboard from './component/dashboard/dashboard';
import Register from './component/registration/registration';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Dashboard />
      <Register /> */}

    <BrowserRouter>
     <div>
     <Switch>
       <Route exact path = "/" >
         <Dashboard />
       </Route>
       <Route path = "/dashboard">
         <Dashboard />
       </Route>
       <Route path = "/registration">
        <Register />
       </Route>
     </Switch>
    </div>
    </BrowserRouter>
    </div>
  );
}
export default App;
