import React from 'react'
import axios from 'axios'
import { Button, Card, Container, Image } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

class EventsEdit extends React.Component {
  state = { events: [], };

  componentDidMount() {
    axios.get("/api/events")
      .then( res => {
        this.setState({ events: res.data, });
      })
  }

  deleteEvent = (id) => {
    axios.delete(`/api/events/${id}`)
      .then( res => {
        const { events, } = this.state;
        this.setState({ events: events.filter(event => event.id !== id), })
      })
  }

  renderEvents = () => {
    const { events } = this.state

    return events.map( event => (
      <Container>
      <Card.Group>      
        <Card>
          <Card.Content>
            <Card.Header>{ event.title }</Card.Header>
            
            <Card.Description>
              {event.date}
              <br></br>
              {event.time}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={ () => this.deleteEvent(event.id) }>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      </Container>
      
     )
   )
  }

  render () {
    return (
      <>
      <Container>
      <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
      </Link>
      <div>{this.renderEvents()}
      <br/>
      </div>
      </Container>
      </>
    )
  }
}


export default withRouter(EventsEdit)
