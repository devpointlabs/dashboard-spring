import React from 'react'
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

<<<<<<< HEAD
export default Topic;
=======
<<<<<<< HEAD
export default Topic;
=======
export default Topic;
      
>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
>>>>>>> 1227ad4623137909d88c6d0a037f1854ae0b42e8
