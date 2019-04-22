import React from "react"
import axios from "axios"
import { Button, Form, Header, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class VideoForm extends React.Component {
    state = { videos: [], };


    handleSubmit = (e) => {
        e.preventDefault();
        const videos = { ...this.state, };
        axios.post("/api/videos", videos)
          .then( res => {
            this.props.history.push("/videoedit");
          })
          // this.setState({ ...this.defaultValues, });
      }
    
      handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
      }
    
      fileSelectHandler = (e) => {
          this.setState({
              videos: e.target.files[0]
          })
          
      }
      

    render() {
        const { video_url, } = this.state;
        return(
            <Container style={styles.background}>
            <Header as="h1" style={styles.text}>
            New Video
            </Header>
            <label style={{color: 'white'}}>Add A Video Link</label>
            <Form onSubmit={this.handleSubmit}>
                
                    <Form.Input 
                        required
                        autoFocus
                        
                        placeholder="Link"
                        name="video_url"
                        value={video_url}
                        onChange={this.handleChange}
                    />
                
                <Button type="submit">Submit</Button>
                <Link to='/addedit'>
                  <Button  color='white'>
                    Back
                 </Button>
                 </Link>
            </Form>
            </Container>
        )
    }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
    width: '100vh',
  },
  text: {
    color: "white"
  }
}

export default VideoForm
