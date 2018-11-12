import React, { Component } from 'react';
import { Router, Route, } from 'react-router';
import history from './history';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { AboutUs } from './pages/AboutUs';
import { Login } from './pages/Login';
import {Signup} from './pages/Signup';
import {Main} from './layouts/main';
import {Auth} from './layouts/auth';
import {Dashboard} from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className="App">
          <Router history={history}>
              <div>
                <Route path='/' component={Wrapper}/>
              </div>
          </Router>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            />
          <ToastContainer />
      </div>
    );
  }
}

export default App;


class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    console.log("Wrapper",props);
  }
  render(){
    return(
      <div>
          {
              (this.props.location.pathname !=='/dashboard'&&this.props.location.pathname !=='/login'&&this.props.location.pathname !=='/signup') &&
              <Main>
                  <Route exact path='/' component={Home} />
                  <Route path="/about" component={AboutUs} />
                  <Route path="/contact-us" component={ContactUs} />
              </Main>
          }
          {
            (this.props.location.pathname ==='/login'||this.props.location.pathname ==='/signup') &&
            <Auth>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Auth>
          }
          {
            (this.props.location.pathname ==='/dashboard') &&
                <PrivateRoute path="/dashboard" component={Dashboard} />
          }
      </div>
    )
  }
}