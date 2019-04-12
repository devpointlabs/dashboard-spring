import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios"



class TopicsForm extends React.Component {
  // defaultValues = { title: "", topic_date: "", topic_image: "",  };
  state = { topics: [], };

  handleSubmit = (e) => {
    e.preventDefault();
    const topic = { ...this.state, };
    axios.post("/api/topics", topic)
      .then( res => {
        this.props.history.push("/topicsview");
      })
      // this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const{ name, value, } = e.target
    this.setState({ [name]: value, });
  }

  render () {
    const { title, topic_date, topic_image } = this.state;

    return (
      <div>
        <Header as="h1">New Topic</Header>
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
            label="Topic Date"
            name="topic_date"
            placeholder="Topic Date"
            value={topic_date}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Topic Image"
            name="topic_image"
            placeholder="Topic Image"
            value={topic_image}
            onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Button color="cyan">Submit></Form.Button>
        </Form>
        <br/>
      </div>
    )
  }
}

export default TopicsForm;
      
        
    
        
