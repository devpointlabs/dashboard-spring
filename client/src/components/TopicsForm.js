import React from 'react';
import { Form, Header, Image, Container} from "semantic-ui-react";
import axios from "axios"
import {Link, withRouter} from 'react-router-dom'




class TopicsForm extends React.Component {
  defaultValues = { title: "", topic_date: "", topic_image: "",  };
  state = { topics: [], };

  handleSubmit = (e) => {
    e.preventDefault();
    const topic = { ...this.state, };
    axios.post("/api/topics", topic)
      .then( res => {
        this.props.history.push("/complete");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const{ name, value, } = e.target
    this.setState({ [name]: value, });
  }

  render () {

    const { title, topic_image } = this.state;
    return (
      <Container style={styles.background}>
       <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
         </Link>
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
            required
            autoFocus
                      
            placeholder="URL"
            name="topic_image"
            value={topic_image}
            onChange={this.handleChange}
                  />
          <Form.Button color="cyan">Submit</Form.Button>
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

export default withRouter(TopicsForm);
      
        
    
        
