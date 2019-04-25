import React from 'react';
import { Header, Table, } from 'semantic-ui-react';
import axios from 'axios'
import {Link, } from 'react-router-dom'
import CohortView from './CohortView'


class EventsView extends React.Component {


  state = { events: [], };

  componentDidMount() {
    axios.get("/api/events")
      .then( res => {
        this.setState({ events: res.data, });
      })
  }

  renderTopics = () => {
    const { events, } = this.state
    switch  (events.length) {

      case 1 :
      return (
      <>
      
    {events.map( event => (
      
      <Table celled>
    
        <Table.Body style={BackgroundStyles}>
      
          <Table.Row>
            <Table.Cell>
            <Header>{event.title}</Header>
            <Header.Subheader >{event.date}</Header.Subheader>
            <Header.Subheader>{event.time}</Header.Subheader>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      )
    )}
  </>
  )
      case 2 :
      return (
        <>
      
      {events.map( event => (
      
        <Table celled>
      
          <Table.Body style={BackgroundStyles}>
            <Table.Row>
              <Table.Cell>
              <Header>{event.title}</Header>
              <Header.Subheader>{event.date}</Header.Subheader>
              <Header.Subheader>{event.time}</Header.Subheader>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        )
      )}
    </>
    )
    case 3 :
    return (
      <>
      {events.map( event => (
      <Table celled>
    
        <Table.Body style={BackgroundStyles}>
          <Table.Row>
            <Table.Cell>
            <Header>{event.title}</Header>
            
            <Header.Subheader>{event.date}</Header.Subheader>
            <Header.Subheader>{event.time}</Header.Subheader>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      )
    )}
      </>
  )

      case 0 : 
      return (
        <>
          <h1>You don't have any Events </h1>
          <Link to="/eventsform">Add A Event</Link>
        </>
      )
      default :
      return (
        <>
          <h1>You Have Too Many Events </h1>
          <Link to="/eventsedit">Manage Events</Link>
        </>
      )
  }
}
    
  render() {
    return (
      <div overflow='visible'>
        <CohortView/>
        <div as='h1' textAlign='center'>{ this.renderTopics() }</div>
      </div>
    )
  }
}
const BackgroundStyles = {

backgroundColor:`#9E9E9E`,
}




export default EventsView;
      
        
           
       
   
   
