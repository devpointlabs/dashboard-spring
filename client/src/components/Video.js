import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Video extends React.Component {
  state = { videos: [] }
  
  componentDidMount() {
    axios.get(`/api/videos`)
      .then(res =>
        this.setState({ videos: res.data }))
  }

  render() {
    return (
        <>

        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.videos.map(v=> 
            <div key={this.state.videos.id} style={{margin: "20px", zIndex: "2", border: "solid black 1px", textAlign: "Center"}}> 
              <Link to={`/video/${v.id}`}>    
                <div style={{}}>
                  <iframe src={v.video_url} controls={0} style={{zIndex: "1"}} >
                  </iframe>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                <div style={{fontSize: "2em", fontWeight: "bold", padding: "10px", color: "black"}}>
                {v.title} 
                </div>
                <div style={{fontSize: "1em", color: "black", }}></div>
                </div>
              </Link>
              </div>)}
        </div>
    
      </>
    )
  }

}




export default Video;