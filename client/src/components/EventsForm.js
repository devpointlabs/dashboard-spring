import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class EventsForm extends React.Component {
  defaultValues = { title: "", start_time: "", end_time: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const event = { ...this.state, };
    axios.post("/api/events", event)
      .then( res => {
        this.props.history.push("/eventsview");
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
      <div>
        <Header as="h1">New Event</Header>
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
            label="Start Time"
            name="startTime"
            placeholder="startTime"
            value={start_time}
            onChange={this.handleChange}
          />
          <Form.Input
            label="End Time"
            name="endTime"
            placeholder="endTime"
            value={end_time}
            onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Button color="cyan">Submit></Form.Button>
        </Form>
      </div>
    )
  }
}

export default EventsForm;