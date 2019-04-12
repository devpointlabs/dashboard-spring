import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

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
       <button onClick={ () => this.deleteVideo(video.id) }>Delete</button>
       <Header>
        { video.title }
       </Header>
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