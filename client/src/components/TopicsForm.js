import React from 'react';
import { Form, Header, Button, Container} from "semantic-ui-react";
import axios from "axios"
import {Link} from 'react-router-dom'



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
      <Container style={styles.background}>
        <Header as="h1" style={styles.text}>New Topic</Header>
          <Form onSubmit={this.handleSubmit}>
          
          <label style={{color: 'white'}}>Title</label>
            <Form.Input 

              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
              required
          />
          <label style={{color: 'white'}}>Topic Image</label>
          <Form.Input
            type='file'
            name="topic_image"
            placeholder="Topic Image"
            value={topic_image}
            onChange={this.handleChange}
          />
          <Form.Button color="cyan">Submit</Form.Button>
          <Link to='/addedit'>
            <Button  color='white'>
                    Back
            </Button>
          </Link>
        </Form>
        <br/>
      </Container>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
    width: '100vh'
  },
  text: {
    color: "white"
  }
}

export default TopicsForm;
      
        
    
        
