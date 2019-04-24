import React from 'react'
import axios from 'axios'
import {Button, Container, Image} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

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
        this.props.history.push("/addedit")
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

      <>
      <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
         </Link>
      <div>{this.renderVideos()}

      
      </div>
      </>
    )
  }
}




export default withRouter(VideoEdit)
       
      
     
            
       
