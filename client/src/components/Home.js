import React from 'react';
import { Header, Grid, Image, Card,} from 'semantic-ui-react';
import TopicsList from './TopicView'
import  Events  from './Events';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import VideoView from './VideoView'
import ImagesView from './ImagesView'
const Home = () => (
  <div>
    
    <Grid divided='vertically' celled padded style={{height: '100vh'}}>
      <Grid.Row overflow='visible' columns={2} style={{height: '50%'}}>
        <Grid.Column>
            <TopicsList/> 
        </Grid.Column>
        <Grid.Column>
          <ImagesView />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2} style={{height: '50%'}}>
          <Grid.Column>
            <VideoView />
          </Grid.Column>
          <Grid.Column>
            <Events />
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
    
  </div>
)

  





export default Home;
