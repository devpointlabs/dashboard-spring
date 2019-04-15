import React from "react"
import axios from "axios"
import { Button, Form, Header, } from 'semantic-ui-react';

class ImagesForm extends React.Component {
  state = { images: [], };


  handleSubmit = (e) => {
      e.preventDefault();
      debugger
      const images = { ...this.state, };
      axios.post("/api/images", images)
        .then( res => {
          this.props.history.push("/imagesview");
        })
    }
  
    handleChange = (e) => {
      const { name, value, } = e.target;
      this.setState({ [name]: value, });
    }
  
    

  render() {
      const { image_url, } = this.state;
      return(
        <div style={styles.background}>
          <div style={{ margin:"20px", }}>
          <Header as="h1">
              New Image
          </Header>
          </div>
          <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                  <Form.Input 
                      required
                      autoFocus
                      label='Image'
                      placeholder="URL"
                      name="image_url"
                      value={image_url}
                      onChange={this.handleChange}
                  />
              </Form.Group>
              <Button type="submit">Submit</Button>
          </Form>
          </div>
      )
  }
}

const styles = {
  background: {
    backgroundColor: "#8a2be2",
    height: "100vh",
  }
}

export default ImagesForm