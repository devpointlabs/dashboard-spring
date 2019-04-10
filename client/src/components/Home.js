import React from 'react';
import { Header, Grid, Image, Card,} from 'semantic-ui-react';
import TopicView from './TopicView'
import  Events  from './Events';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import Video from './Video'

const Home = () => (
  <div>
    
    <Grid divided='vertically' celled padded style={{height: '100vh'}}>
      <Grid.Row overflow='visible' columns={2} style={{height: '50%'}}>
        <Grid.Column>
            <TopicView /> 
        </Grid.Column>
        <Grid.Column>
          <Header as='h3' textAlign='center'>Picture</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2} style={{height: '50%'}}>
          <Grid.Column>
            <Video />
          </Grid.Column>
          <Grid.Column>
            <Events />
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
    
    
  <Header as="h3" textAlign="center">
    Home
    <Link to="/video"> Video</Link>
  </Header>
  <Header as="h3" textAlign="center">
    form
    <Link to="/videoform"> VideoForm</Link>
  </Header>
  </div>
)

  





export default Home;
