import React from 'react';
import { Header, Grid, Image} from 'semantic-ui-react';
import TopicView from './TopicView'
import  Events  from './Events';
import axios from 'axios';
import { Link, } from 'react-router-dom';

const Home = () => (
  <div>
    
    <Grid divided='vertically' celled padded style={{height: '100vh'}}>
      <Grid.Row columns={2} style={{height: '50%'}}>
        <Grid.Column>
            <TopicView /> 
        </Grid.Column>
        <Grid.Column>
          <Header as='h3' textAlign='center'>Picture</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2} style={{height: '50%'}}>
          <Grid.Column>
            <Header as='h3' textAlign='center'>Video</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' textAlign='center'>Events</Header>
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
  </div>
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
)

  




)
export default Home;
