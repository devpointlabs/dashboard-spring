import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Video extends React.Component {
  state = { video: [] }
  
  componentDidMount() {
    axios.get(`/api/videos`)
      .then(res =>
        this.setState({ video: res.data }))
  }

  renderVideos = () => {
    const { video } = this.state

    switch (video.length) {
      case 1 :
      return video.map( video => (
        <>
        <div style={{display: "flex", flexWrap: "wrap"}}>
        {this.state.video.map(v=> 
<<<<<<< HEAD
          <div key={this.state.video.id} style={{ zIndex: "0", textAlign: "Center"}}> 
            <Link to={`/video/${v.id}`}>    
            <div>
              <iframe title='myframe' width="540" height="400" src={v.video_url}
=======
          <div key={this.state.video.id} style={{margin: "20px", zIndex: "2", textAlign: "Center"}}> 
            <Link to={`/video/${v.id}`}>    
            <div>
<<<<<<< HEAD
              <iframe title='myframe' width="450" height="315" src={v.video_url}
=======
              <iframe title='myframe'width="160%" height="440px" src={v.video_url}
>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
>>>>>>> 1227ad4623137909d88c6d0a037f1854ae0b42e8
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
            </Link>
            </div>)}
      </div>
      </>
      )
    )
      case 0 : 
      return (
        <>
        <h1>You don't have any Videos </h1>
        <Link to="/videoform">Add A Video</Link>
      </>
      )
      default :
      return (
        <>
          <h1>You Have Too Many Videos </h1>
          <Link to="/videoedit">Manage Topics</Link>
        </>
      )
  }
}
<<<<<<< HEAD
  render() {
    return (
        <>
=======
<<<<<<< HEAD
  render() {
    return (
        <>
=======

  render() {
    return (
        <>

>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
>>>>>>> 1227ad4623137909d88c6d0a037f1854ae0b42e8
       <div>{ this.renderVideos() }</div>
    
      </>
    )
  }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======

}




>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
>>>>>>> 1227ad4623137909d88c6d0a037f1854ae0b42e8
export default Video;