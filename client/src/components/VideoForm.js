import React from "react"
import axios from "axios"
import { Button, Form, Header, Input } from 'semantic-ui-react';

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
    
      fileSelectHandler = (e) => {
          this.setState({
              videos: e.target.files[0]
          })
          
      }
      

    render() {
        const { video_url, } = this.state;
        return(
            <>
            <div style={{ margin:"20px", }}>
            <Header as="h1">
                New Video
            </Header>
            </div>
            <Form onSubmit={this.handleSubmit}>
                {/* <Form.Group widths="equal">
                    <Form.Input 
                        required
                        autoFocus
                        label='Video'
                        placeholder="Link"
                        name="video_url"
                        value={video_url}
                        onChange={this.handleChange}
                    />
                </Form.Group> */}
                <Input placeholder='File' type='file' onChange={this.fileSelectHandler} />
                <Button type="submit">Upload</Button>
            </Form>
            </>
        )
    }
}



export default VideoForm
