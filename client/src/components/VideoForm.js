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
            <div style={{ margin:"20px", }}>
            <Header as="h1">
                New Video
            </Header>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        required
                        autoFocus
                        label='Video'
                        placeholder="Link"
                        name="video_url"
                        value={video_url}
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

export default VideoForm
