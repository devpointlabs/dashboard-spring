import React from "react"
import axios from "axios"
import { Button, Form, Header, } from 'semantic-ui-react';

class VideoForm extends React.Component {
    state = { videos: [], };


    handleSubmit = (e) => {
        e.preventDefault();
        const videos = { ...this.state, };
        axios.post("/api/videos", videos)
          .then( res => {
            this.props.history.push("/videoview");
          })
          // this.setState({ ...this.defaultValues, });
      }
    
      handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
      }
    
      

    render() {
        const { video_url, } = this.state;
        return(
            <div style={styles.background}>
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
            </Form>
            </div>
        )
    }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
  },
  text: {
    color: "white"
  }
}

export default VideoForm
