import React from 'react'
import axios from 'axios'
import { Image, Button, Container } from 'semantic-ui-react'

class VideoEdit extends React.Component {
  state = { videos: [], };

  componentDidMount() {
    axios.get("/api/videos")
      .then( res => {
        this.setState({ videos: res.data, });
      })
  }

  deleteVideo = (id) => {
    axios.delete(`/api/videos/${id}`)
      .then( res => {
        const { videos, } = this.state;
        this.setState({ videos: videos.filter(video => video.id !== id), })
        this.props.history.push("/videoview")
      })
  }

  renderVideos = () => {
    const { videos } = this.state
    return videos.map( video => (
      <>
        <Container>

            <iframe title='myframe' src={video.video_url}
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
              <br/>
              <Button  color='red' onClick={ () => this.deleteVideo(video.id) }>
                Delete
              </Button>
        </Container>
      </>
     )
   )
  }

  render () {
    return (
      <div>{this.renderVideos()}</div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#8a2be2",
    height: "100vh",
  }
}

export default VideoEdit
       
      
     
            
       
