import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import axios from 'axios'
import {Link, } from 'react-router-dom'





class TopicView extends React.Component {


  state = { topics: [],  editing: false, };

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
          <Header as='h1'>You don't have any Topics </Header>
          <Link to="/topicsform">Add A Topic</Link>
        </>
      )
      default :
      return (
        <>
          <Header as='h1'>You Have Too Many Topics </Header>
          <Link to="/topics/edit">Manage Topics</Link>
        </>
      )
  }
}
    
  render() {
    return (

      <div overflow='visible'>
        <br/>
        <br/>
        <br/>
        <Link to="/addedit">
        <Header style={styles.h1} textAlign='center'>Today's Lecture Topic:</Header>
        </Link>
        <Header style={styles.h4} textAlign='center'>University of Utah Full-Time Web Development</Header>
        <Header textAlign='center'>
        <iframe title='myframe' src="http://free.timeanddate.com/clock/i6q14t74/n220/fs24/fc5900b3/tct/pct/tt1/tw0" frameborder="0" width="220" height="30" allowTransparency="true"></iframe>
        </Header>
        <Header as='h1' textAlign='center'>{ this.renderTopics() }</Header>
        {/* <Image src={topic.topic_image} centered size="tiny"></Image> */}


      </div>
    )
  }
}

const styles = {
  h1: {
    fontSize: '40px',
   },
  h4: {
    fontSize: '25px',
    fontWeight: 'normal'
  }
} 

    
export default TopicView;



