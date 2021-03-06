import React from 'react';
import { Grid } from 'semantic-ui-react';
import TopicsList from './TopicView'
import  EventsView  from './EventsView';
import VideoView from './VideoView'
import ImagesView from './ImagesView'

const Home = () => (
  
  <div>
    
    <Grid celled padded style={GridStyle} >
      <Grid.Row columns={2} style={{height: '50%'}}>
        <Grid.Column>
            <TopicsList/> 
        </Grid.Column>
        <Grid.Column>
          <ImagesView />
        </Grid.Column>
      </Grid.Row>


      <Grid.Row columns={2} style={{height: '50%'}}>
          <Grid.Column >
            <VideoView />
          </Grid.Column>
          <Grid.Column>
            <EventsView />
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
    
    
  </div>
 
)

const GridStyle = {
  overflow: `visible`,
  whiteSpace: `nowrap`,
  height: `100vh`,
  width: `100%`,
  margin: `0`,
  backgroundColor: `#eee`,
}

export default Home;
