import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

class TopicEdit extends React.Component {
  state = { topics: [], };

  componentDidMount() {
    axios.get("/api/topics")
      .then( res => {
        this.setState({ topics: res.data, });
      })
  }

  deleteTopic = (id) => {
    axios.delete(`/api/topics/${id}`)
      .then( res => {
        const { topics, } = this.state;
        this.setState({ topics: topics.filter(topic => topic.id !== id), })
      })
  }

  renderTopics = () => {
    const { topics } = this.state

    return topics.map( topic => (
      <>
       <button onClick={ () => this.deleteTopic(topic.id) }>Delete</button>
       <Header>
        { topic.title }
       </Header>
      </>
     )
   )
  }

  render () {
    return (
      <div>{this.renderTopics()}</div>
    )
  }
}

export default TopicEdit
