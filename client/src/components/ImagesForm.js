import React from "react"
import axios from "axios"
import { Button, Form, Header, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class ImagesForm extends React.Component {
  state = { images: [], };


  handleSubmit = (e) => {
      e.preventDefault();
      const images = { ...this.state, };
      axios.post("/api/images", images)
        .then( res => {
          this.props.history.push("/imagesedit");
        })
    }
  
    handleChange = (e) => {
      const { name, value, } = e.target;
      this.setState({ [name]: value, });
    }
  
    

  render() {
      const { image_url, } = this.state;
      return(
        <Container style={styles.background}>
          <Header as="h1" style={styles.text}>
              New Image
          </Header>
          <label style={{color: 'white'}}>Add Image Link</label>
          <Form onSubmit={this.handleSubmit}>
              
                  <Form.Input 
                      required
                      autoFocus
                      
                      placeholder="URL"
                      name="image_url"
                      value={image_url}
                      onChange={this.handleChange}
                  />
              
              <Button type="submit">Submit</Button>
            
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

export default ImagesForm