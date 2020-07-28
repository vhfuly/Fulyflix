import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';
import Error from './pages/Error';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/video" component={RegisterVideo} exact/>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/category" component={RegisterCategory} exact/>
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

