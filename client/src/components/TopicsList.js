import React from 'react';
import { Header, Form, Dropdown, Button, Container, Card, Image } from 'semantic-ui-react';
import axios from 'axios'
import beaker from '../Images/Beaker.png'
import {Link, } from 'react-router-dom'
import Topic from './Topic'



class TopicsList extends React.Component {


  state = { topics: [], };

  componentDidMount() {
    axios.get("/api/topics")
      .then( res => {
        this.setState({ topics: res.data, });
      })
  }

  updateView = (id) => {
    let { topics, } = this.state;
    axios.put(`/api/topics/${id}`)
    .then( res => {
      this.props.history.push("/topics");
    })
  }

  renderTopics = () => {
    const { topics, } = this.state;
    
    if (topics.length <= 0)
      return <h1>No Topic</h1>
    return topics.map( topic => (
      <Link to={`/topics/${topic.id}`}>
        <h1>{topic.title}</h1>
      </Link>
    ))
  }
    
  render() {
    return (
      <div overflow='visible'>
        <Header as='h1' textAlign='center'>Today's Lecture Topic:</Header>
        <Header as='h4' textAlign='center'>University of Utah Full-Time Web Development</Header>
        <Header as='h1' textAlign='center'>{ this.renderTopics() }</Header>
        <Image src={beaker} centered size="tiny"></Image>


      </div>
    )
  }
}
    
    
export default TopicsList;
      
        
    
      
          
         
      

