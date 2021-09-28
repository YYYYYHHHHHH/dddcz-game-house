import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Main from './components/Main'

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/main" component={Main}></Route>
      <Redirect to="/login"></Redirect>
    </Switch>
  );
}

export default App;
