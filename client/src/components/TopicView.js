import React from 'react';
import { Header, Form, Dropdown, Container, Card } from 'semantic-ui-react';
import axios from 'axios'


class TopicView extends React.Component {
  
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
      this.props.history.push("/topicsview");
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
    const { title, topic_date, topic_image, id } = this.state;
    return (
      <div>
        <Header as='h1' textAlign='center'>Today's Lecture Topic:</Header>
        <Header as='h4' textAlign='center'>University of Utah Full-Time Web Development</Header>
        <Header as='h1' textAlign='center'>{ this.renderTopics() }</Header>

      </div>
    )
  }
}
    
    
export default TopicView;
      
        
    
      
          
         
      

