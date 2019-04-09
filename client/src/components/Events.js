import React from "react";
import { Button, Card, Header, } from "semantic-ui-react";
import Axios from "axios";
import { Link, } from "react-router-dom"; 


class Events extends React.Component {
  state = { events: [], };

  componentDidMount() {
    Axios.get("/api/events")
      .then( res => {
        this.setState({ events: res.data, });
      })
  }

  renderEvents = () => {
    const { events, } = this.state;

    if (events.length <= 0)
      return <h2>No Events</h2>
    return Events.map( event => (
      <Card>
        <Card.Content>
          <Card.Header>{ event.title }</Card.Header>
          <Card.Meta>{ event.startTime }</Card.Meta>
          <Card.Meta>{ event.endTime }</Card.Meta>
          <Card.Description>
            { event.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/events/${event.id}`} color='green'>View
          </Button>
        </Card.Content>
      </Card>
    ))
    }

    render() {
      return (
        <div>
          <Header as="h1">Events</Header>
          <br />
          <Button as={Link} color="green" to="/events/new">
            Add Event
          </Button>
          <br />
          <br />
          <Card.Group>
            { this.renderEvents() }
          </Card.Group>
        </div>
      )
    }
  }

export default Events;