import React from 'react'
import axios from 'axios'
import { Image, Button, Card } from 'semantic-ui-react'

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
      <div style={styles.background}>
      <Card.Group>      
        <Card>
          <Card.Content>
            <Image floated='right' size='Medium' src={topic.topic_image} />
            <Card.Header>{ topic.title }</Card.Header>
            <Card.Description>
              DATE AND TIME
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={ () => this.deleteTopic(topic.id) }>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
     )
   )
  }

  render () {
    return (
      <div>{this.renderTopics()}</div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#8a2be2",
    height: "100vh",
  }
}

export default TopicEdit
            

