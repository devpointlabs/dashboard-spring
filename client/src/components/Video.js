import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthConsumer, } from "../providers/AuthProvider";
class Video extends React.Component {
  state = { video: [] }
  
  componentDidMount() {
    axios.get(`/api/videos`)
      .then(res =>
        this.setState({ video: res.data }))
  }

  render() {
    return (
      <>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.video.map(v=> 
            <div key={this.state.video.id} style={{margin: "20px", zIndex: "2", textAlign: "Center"}}> 
              <Link to={`/video/${v.id}`}>    
              <div>
                <iframe width="100%" height="100px" src={v.video_url}
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              </Link>
              </div>)}
        </div>
      </>
    )
  }

}
const ConnectedVideo = (props) => (
  <AuthConsumer>
      {auth =>
          <Video {...props} auth={auth} />
      }
  </AuthConsumer>
)


export default ConnectedVideo
