import React from 'react';
import {  Grid, Container,} from 'semantic-ui-react';
import TopicsList from './TopicView'
import  EventsView  from './EventsView';
import VideoView from './VideoView'
import ImagesView from './ImagesView'
const Home = () => (
  <div>
    <Container>

    <Grid divided='vertically' celled padded style={GridStyle}>
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
            <EventsView />
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
    </Container>
    
  </div>
 
)

const GridStyle = {
  overFlow: `visible`,
  whiteSpace: `nowrap`,
  // height: `100vh`,
  backgroundColor: `#eee`,
}

export default Home;
