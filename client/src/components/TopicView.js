import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import axios from 'axios'
import beaker from '../Images/Beaker.png'
import {Link, } from 'react-router-dom'





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
      <>
       <Header >{ topic.title }</Header>
       <Image src={topic.topic_image} centered size="huge"></Image>
      </>
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
    return (
      <div overflow='visible' textAlign='center'>
        <Header as='h1' textAlign='center'>Today's Lecture Topic:</Header>
        <Header as='h4' textAlign='center'>University of Utah Full-Time Web Development</Header>
        <Header textAlign='center'>

        <iframe src="http://free.timeanddate.com/clock/i6q14t74/n220/fs24/fc5900b3/tct/pct/tt1/tw0" frameborder="0" width="220" height="30" allowTransparency="true"></iframe>
        </Header>

        <Header as='h1' textAlign='center'>{ this.renderTopics() }</Header>
        {/* <Image src={topic.image_image} centered size="tiny"></Image> */}


      </div>
    )
  }
}

    
export default TopicView;
