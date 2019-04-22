import React from 'react';
import {  Grid, Container, Advertisement} from 'semantic-ui-react';
import TopicsList from './TopicView'
import  EventsView  from './EventsView';
import VideoView from './VideoView'
import ImagesView from './ImagesView'
import './ImagesView.css';
const Home = () => (
  
  <div class='grid'>
    
    <Grid divided='vertically' celled padded style={GridStyle}>
      <Grid.Row overFlow='visible' columns={2} style={{height: '50%'}}>
        <Grid.Column style={GridInner}>
            <TopicsList/> 
        </Grid.Column>
        <Grid.Column style={GridInner}>
          <ImagesView />
        </Grid.Column>
      </Grid.Row>


      <Grid.Row columns={2} style={{height: '50%'}}>
          <Grid.Column style={GridInner}>
            <VideoView />
          </Grid.Column>
          <Grid.Column style={GridInner}>
            <EventsView />
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
    
    
  </div>
 
)

const GridStyle = {
  overflow: `visible`,
  whiteSpace: `nowrap`,
  // height: `100vh`,
  width: `100%`,
  margin: `0`,
  backgroundColor: `#eee`,
}

const GridInner = {
  margin: '0',
  boxShadow: 'none',
  marginTop: '0',
  marginBottom: '0',

}

export default Home;
