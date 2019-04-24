import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as="h3" textAlign="center" style={styles}>
    Page not found return
    <Link to="/"> Home</Link>
  </Header>
)

export default NoMatch;

const styles = {
  color: 'white',
  fontSize: '60px'
}