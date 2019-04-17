import React  from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import EventsForm from './components/EventsForm';
import EventsView from './components/EventsView';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute';
import TopicsForm from './components/TopicsForm'
import Topic from './components/Topic'
import TopicView from './components/TopicView'
import TopicEdit from './components/TopicEdit'
import VideoView from './components/VideoView'
import VideoForm from "./components/VideoForm"
import VideoEdit from './components/VideoEdit'
import ImagesView from './components/ImagesView'
import ImagesEdit from './components/ImagesEdit'
import ImagesForm from './components/ImagesForm'
import EventsEdit from './components/EventsEdit'



const App = () => (
  
  <div>
  <Navbar />
  <FetchUser>
  <div style= {{backgroundColor: "#6E54A3", padding: "70px", margin: "0px"}}> 
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/topicsform" component={TopicsForm} />
        <Route exact path="/topicsview" component={TopicView} />
        <Route exact path="/topics/edit" component={TopicEdit} />
        <Route exact path="/topic/:id" component={Topic} />
        <Route exact path="/eventsform" component={EventsForm} />
        <Route exact path="/eventsview" component={EventsView} />
        <Route exact path="/eventsedit" component={EventsEdit}/>
        <Route exact path="/videoform" component={VideoForm} />
        <Route exact path="/videoview" component={VideoView} />
        <Route exact path="/videoedit" component={VideoEdit} />
        <Route exact path="/imagesform" component={ImagesForm} />
        <Route exact path="/imagesview" component={ImagesView} />
        <Route exact path="/imagesedit" component={ImagesEdit} />

        
        <Route component={NoMatch} />
      </Switch>
    </Container>
</div>
  </FetchUser>
</div>
)

export default App;
