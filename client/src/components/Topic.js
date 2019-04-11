import React from 'react'
import axios from 'axios';
import {Form, Header,  } from 'semantic-ui-react'

class Topic extends React.Component {
  // defaultValues = { title: "", topic_date: "", topic_image: "",  };
  state = { topics: [], };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const topic = { ...this.state, };
  //   axios.post("/api/topics", topic)
  //     .then( res => {
  //       this.props.history.push("/topicsview");
  //     })
  //     // this.setState({ ...this.defaultValues, });
  // }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  updateView = () => {
    let { topics, } = this.state;
    axios.put(`/api/topics/${this.props.match.params.id}`)
    .then( res => {
      this.props.history.push("/topics");
    })
  }

  

  render() {
    const { title, topic_date, topic_image, } = this.state;

    return (
      <div>
        <Header as="h1">Edit Topic</Header>
        <Form onSubmit={this.updateView}>
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

export default Topic;
      