import React  from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import EventsForm from './components/EventsForm';
import EventsView from './components/EventsView';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute';
import TopicsForm from './components/TopicsForm'
import TopicView from './components/TopicView'
import TopicEdit from './components/TopicEdit'
import VideoView from './components/VideoView'
import VideoForm from "./components/VideoForm"
import VideoEdit from './components/VideoEdit'
import ImagesView from './components/ImagesView'
import ImagesEdit from './components/ImagesEdit'
import ImagesForm from './components/ImagesForm'
import EventsEdit from './components/EventsEdit'
import AddEdit from './components/AddEdit'
import SeasonYearForm from './components/SeasonYearForm';





const App = () => (
  
  <div style={{ background:"#6E54A3"}}>
  {/* <Navbar /> */}
  <FetchUser>
  <div > 
    
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/topicsform" component={TopicsForm} />
        <ProtectedRoute exact path="/topicsview" component={TopicView} />
        <ProtectedRoute exact path="/topics/edit" component={TopicEdit} />
        <ProtectedRoute exact path="/eventsform" component={EventsForm} />
        <ProtectedRoute exact path="/eventsview" component={EventsView} />
        <ProtectedRoute exact path="/eventsedit" component={EventsEdit}/>
        <ProtectedRoute exact path="/videoform" component={VideoForm} />
        <ProtectedRoute exact path="/videoview" component={VideoView} />
        <ProtectedRoute exact path="/videoedit" component={VideoEdit} />
        <ProtectedRoute exact path="/imagesform" component={ImagesForm} />
        <ProtectedRoute exact path="/imagesview" component={ImagesView} />
        <ProtectedRoute exact path="/imagesedit" component={ImagesEdit} />
        <ProtectedRoute exact path="/addedit" component={AddEdit} />
        <ProtectedRoute exact path="/seasonyearform" component={SeasonYearForm} />


        
        <Route component={NoMatch} />
      </Switch>
    
  </div>
  </FetchUser>
</div>
)

export default App;
