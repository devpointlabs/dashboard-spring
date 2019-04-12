import React from 'react'
import axios from 'axios'
import { Header, Button } from 'semantic-ui-react'

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
      <ul>
       <Header>
        { event.title }
       </Header>
       <Button onClick={ () => this.deleteEvent(event.id) }>Delete</Button>
      </ul>
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

<<<<<<< HEAD
export default EventsEdit
=======
<<<<<<< HEAD
export default EventsEdit
=======
export default EventsEdit

>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
>>>>>>> 1227ad4623137909d88c6d0a037f1854ae0b42e8
