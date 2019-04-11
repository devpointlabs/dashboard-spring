import React from 'react';
import { Header, Form, Dropdown, Container, Card } from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class TopicView extends React.Component {
  
  state = { topics: [], };

  componentDidMount() {
    axios.get("/api/topics")
      .then( res => {
        this.setState({ topics: res.data, });
      })
  }

  renderTopics = () => {
    const { topics } = this.state

    switch (topics.length) {
      case 1 :
      return topics.map( topic => (
       <Header >{ topic.title }</Header>
      )
    )
      case 0 : 
      return (
        <>
          <h1>You don't have any Topics </h1>
          <Link to="/topicsform">Add A Topic</Link>
        </>
      )
      default :
      return (
        <>
          <h1>You Have Too Many Topics </h1>
          <Link to="/topics/edit">Mange Topics</Link>
        </>
      )
  }
}
    
  render() {
    const { title, topic_date, topic_image, id } = this.state;
    return (
      <div overflow='visible'>
        <Header as='h1' textAlign='center'>Today's Lecture Topic:</Header>
        <Header as='h4' textAlign='center'>University of Utah Full-Time Web Development</Header>
        <Header as='h1' textAlign='center'>{ this.renderTopics() }</Header>

      </div>
    )
  }
}
       
export default TopicView;
    