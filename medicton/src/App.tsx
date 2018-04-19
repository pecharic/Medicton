import * as React from 'react';
import {  Route } from 'react-router-dom';
import {Home} from './pages/index';

export default  class App extends React.Component {
  public render() {
    return (
      <div className="App">
            <Route exact path="/" component={Home}/>
           <Route path="/admin" component={Admin}/>
           <Route path="/dashboard" component={User}/>
      </div>
    );
  }
}


const Admin = () => {
  return (
     <div>admin</div>
  )
}

const User = () => {
  return (
      <div>User</div>
  );
}