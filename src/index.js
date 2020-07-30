import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';
import { Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/video" component={RegisterVideo} exact/>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/category" component={RegisterCategory} exact/>
      <Route component={()=>(
        <div align="center" style={{"margin-top": "-80px", 
        "backgroundColor":"#000",
        "color":"#3ea333",
        "height":"100vh"} }>

        <h1>ERROR 404</h1>
        <p>Página não encontrada</p>
          <Link to="/">
            Ir para Home
          </Link>
        <iframe

        height="600px"
        width="100%"
        src="https://hipsta-jogo.netlify.app">

        </iframe>
        </div>
      )} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

