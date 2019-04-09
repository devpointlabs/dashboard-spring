import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute';
import Video from './components/Video'
import VideoForm from "./components/VideoForm"

const App = () => (
  <div>
  <Navbar />
  <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/videoform" component={VideoForm} />
        <Route exact path="/video" component={Video} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
</div>
)

export default App;

