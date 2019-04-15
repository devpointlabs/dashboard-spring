import React from 'react'
import axios from 'axios'
import { Image, Button, Card } from 'semantic-ui-react'

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
      })
  }

  renderVideos = () => {
    const { videos } = this.state

    return videos.map( video => (
      <>
       <Card.Group>      
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='' />
            <Card.Header>{ video.title }</Card.Header>
            <Card.Description>
            <iframe title='myframe' src={video.video_url}
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={ () => this.deleteVideo(video.id) }>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
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

export default VideoEdit
       
            
       
