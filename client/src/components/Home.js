import React from 'react';
import { Header, } from 'semantic-ui-react';
import  Events  from './Events';
import axios from 'axios';
import { Link, } from 'react-router-dom';
  
const Home = () => (
  <>
  <div>
    <Header as="h3" textAlign="center">Dashboard</Header>
  </div>
  <Header as="h3" textAlign="center">
    Home
    <Link to="/video"> Video</Link>
  </Header>
  <Header as="h3" textAlign="center">
    form
    <Link to="/videoform"> VideoForm</Link>
  </Header>
  </>



)
export default Home;
