import React from 'react';
import { Form, Header, Button, Container} from "semantic-ui-react";
import axios from "axios";
import {Link} from 'react-router-dom'

class EventsForm extends React.Component {
  defaultValues = { title: "", start_time: "", end_time: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const event = { ...this.state, };
    axios.post("/api/events", event)
      .then( res => {
        this.props.history.push("/eventsedit");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const{ name, value, } = e.target
    this.setState({ [name]: value, });
  }

  render () {
    const { title, start_time, end_time, } = this.state;

    return (
      <Container style={styles.background}>
        <Header as="h1" style={styles.text}>New Event</Header>
        <Form onSubmit={this.handleSubmit}>
        <label style={{color: 'white'}}>Title</label>
            <Form.Input 
             
              name="title"
              autoFocus
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
              required
          />
          <label style={{color: 'white'}}>Start Time</label>
          <Form.Input
           
            name="start_time"
            placeholder="Start Time"
            value={start_time}
            onChange={this.handleChange}
          />
          <label style={{color: 'white'}}>End Time</label>
          <Form.Input
           
            name="end_time"
            placeholder="End Time"
            value={end_time}
            onChange={this.handleChange}
          />
          <Form.Button color="cyan">Submit></Form.Button>
          <Link to='/addedit'>
                  <Button  color='white'>
                    Back
                 </Button>
          </Link>
        </Form>
      </Container>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
    width: "100vh"
  },
  text: {
    color: "white"
  }
}

export default EventsForm;