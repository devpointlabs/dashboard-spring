import React from 'react';
import { Header, Table, } from 'semantic-ui-react';
import axios from 'axios'
import {Link, } from 'react-router-dom'


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
      return events.map( event => (
      <>
       <Header textAlign='center' as='h1'>Calender of Events</Header>
       <Header textAlign='center' as='h3'>#Season #Year</Header>
       <Table celled>
       
       <Table.Body style={BackgroundStyles}>
         <Table.Row>
            <Table.Cell>
             <Header>{event.title}</Header>
             <Header.Subheader>{event.start_time}</Header.Subheader>
             <Header.Subheader>{event.end_time}</Header.Subheader>
            </Table.Cell>
         </Table.Row>
       
       
         <Table.Row>
           <Table.Cell>
             <Header>EVENT </Header>
             <Header.Subheader>#DATE</Header.Subheader>
             <Header.Subheader>#TIME</Header.Subheader>
            </Table.Cell>
         </Table.Row>
         <Table.Row>
            <Table.Cell>
             <Header>EVENT </Header>
             <Header.Subheader>#DATE</Header.Subheader>
             <Header.Subheader>#TIME</Header.Subheader>
            </Table.Cell>
         </Table.Row>
       </Table.Body>
     </Table>
    </>
      )
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
          <Link to=" /eventsedit">Manage Events</Link>
        </>
      )
  }
}
    
  render() {
    return (
      <div overflow='visible'>
        
        <div as='h1' textAlign='center'>{ this.renderTopics() }</div>
<<<<<<< HEAD
=======


>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
      </div>
    )
  }
}
<<<<<<< HEAD
const BackgroundStyles = {
    backgroundColor:`grey`,
  }
=======

const BackgroundStyles = {
    backgroundColor:`grey`,
  }

>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
    
export default EventsView;
      
        
           
       
   
<<<<<<< HEAD
   
=======
   




>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c