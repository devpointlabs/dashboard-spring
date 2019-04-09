import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class EventsForm extends React.Component {
  defaultValues = { title: "", startTime: "", endTime: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const event = { ...this.state, };
    axios.post("/api/events", event)
      .then( res => {
        this.props.history.push("/events");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const{ target: { title, value, } } = e;
    this.setState({ [title]: value, });
  }

  render () {
    const { title, startTime, endTime, } = this.state;

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
            label="startTime"
            name="startTime"
            placeholder="startTime"
            value={startTime}
            onChange={this.handleChange}
          />
          <Form.Input
            label="endTime"
            name="endTime"
            placeholder="endTime"
            value={endTime}
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