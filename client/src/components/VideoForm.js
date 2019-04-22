import React from "react"
import axios from "axios"
import { Button, Form, Header, Image, Container } from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom'

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
             <Link to='/'>
         
            <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
        
            </Link>
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

export default withRouter(VideoForm)
