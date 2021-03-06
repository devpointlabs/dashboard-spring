import React from 'react'
import axios from 'axios'
import { Image, Button, Card, Form, Header, } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class TopicEdit extends React.Component {
  state = { topics: [], editing: false, };

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

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }

  // handleSubmit

  editTopic = (id) => {
    const { title, topic_date, topic_image } = this.state;

    return (
      <div>
        <Header as="h1">Edit Topic</Header>
       
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              label="Title"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
              required
          />
          <Form.Input
            label="Topic Date"
            name="topic_date"
            placeholder="Topic Date"
            value={topic_date}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Topic Image"
            name="topic_image"
            placeholder="Topic Image"
            value={topic_image}
            onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Button basic color='green'  >Update</Form.Button>
        </Form>
        <br/>
      </div>
    )
  }

  

  renderTopics = () => {
    const { topics } = this.state
    return topics.map( topic => (
      <>
      
      <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
         </Link>
      <Card.Group>      
        <Card>
          <Card.Content>
            <Image floated='right' size='Medium' src={topic.topic_image} />
            <Card.Header>{ topic.title }</Card.Header>
            <Card.Description>
             
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
      
      </>
     )
   )
  }

  render () {
    return (
      <>
      <div>{this.renderTopics()}</div>

      </>
    )
  }
}

export default withRouter(TopicEdit)


