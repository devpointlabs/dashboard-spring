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
      <div style={styles.background}>
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
          <label style={{color: 'white'}}>Topic Date</label>
          <Form.Input
            
            name="topic_date"
            placeholder="Topic Date"
            value={topic_date}
            onChange={this.handleChange}
          />
          <label style={{color: 'white'}}>Topic Image</label>
          <Form.Input
            
            name="topic_image"
            placeholder="Topic Image"
            value={topic_image}
            onChange={this.handleChange}
          />
         
          <Form.Button color="cyan">Submit></Form.Button>
        </Form>
        <br/>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#8a2be2",
    height: "100vh",
  },
  text: {
    color: "white"
  }
}

export default TopicsForm;
      
        
    
        
