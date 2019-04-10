import React from 'react';
import { Form, Header, Card, Button,  } from "semantic-ui-react";
import axios from "axios"
import Topics from './Topics';
import {Link, } from 'react-router-dom'


class TopicsForm extends React.Component {
  defaultValues = { title: "", topic_date: "", topic_image: "",  };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const topic = { ...this.state, };
    axios.post("/api/topics", topic)
      .then( res => {
        this.props.history.push("/topicsview");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  

  render() {
    const { title, topic_date, topic_image, } = this.state;

    return (
      <div>
        <Header as="h1">New Topic</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Input
              label='Topic'
              autoFocus
              name='title'
              value={title}
              placeholder='Topic'
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Date"
              name="topic_date"
              placeholder="Date"
              value={topic_date}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Image"
              name="topic_image"
              placeholder="Image"
              value={topic_image}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="purple">Submit</Form.Button>
        </Form>
        <br/>
        

      </div>
    )
  }
}

export default TopicsForm;