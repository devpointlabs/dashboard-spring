import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './VideoView.css';

class VideoView extends React.Component {
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
       <div>
         {this.state.video.map(v=>
           <div key={this.state.video.id} style={{ zIndex: "0", textAlign: "Center"}}>
             <Link to={`/video/${v.id}`}>
             <div>
               <iframe class="resp-iframe" title='myframe' src={v.video_url}
                 allowfullscreen loop>
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
          <Link to="/videoedit">Manage Videos</Link>
        </>
      )
  }
}
  render() {
    return (
        <>
       <div>{ this.renderVideos() }</div>
    
      </>
    )
  }
}
export default VideoView;
