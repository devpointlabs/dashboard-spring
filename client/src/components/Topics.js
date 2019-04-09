import React from 'react';
import { Header, Dropdown, Container, Card } from 'semantic-ui-react';
import axios from 'axios'


class Topics extends React.Component {


  state = { topics: [], };

  componentDidMount() {
    axios.get("/api/topics")
      .then( res => {
        this.setState({ topics: res.data, });
      })
  }
  renderTopics = () => {
    const { topics, } = this.state;

    if (topics.length <= 0)
      return <h1>No Topic</h1>
    return topics.map( topic => (
      
        
        <Header >{ topic.title }</Header>
        ))
      }
      
      render() {
        return (
          <div>
            
            <Header as='h1' textAlign='center'>{ this.renderTopics }</Header>
          
            
          </div>
        )
      }
    }
    export default Topics;
          
         
      
  



  

