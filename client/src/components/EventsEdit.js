import React from 'react'
import axios from 'axios'
import { Header, Button, Card } from 'semantic-ui-react'

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
      <>
     
      
      <Card.Group>      
        <Card>
          <Card.Content>
            <Card.Header>{ event.title }</Card.Header>
            
            <Card.Description>
              DATE AND TIME
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
      </>
     )
   )
  }

  render () {
    return (
      <div>{this.renderEvents()}</div>
    )
  }
}

export default EventsEdit
