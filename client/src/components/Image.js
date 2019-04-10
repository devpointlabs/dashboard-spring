import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthConsumer, } from "../providers/AuthProvider";

class Image extends React.Component {
  state = { image: [] }
  
  componentDidMount() {
    axios.get(`/api/images`)
      .then(res =>
        this.setState({ image: res.data }))
  }

  render() {
    return (
        <>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.image.map(i=> 
            <div key={this.state.image.id} style={{margin: "20px", zIndex: "2", border: "solid black 1px", textAlign: "Center"}}> 
              <Link to={`/image/${i.id}`}>    
              <div>
              
                <iframe width="130%" height="300px" src={i.image_url}
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
            
              </div>
                <div style={{display: "flex", width: "100%"}}>
                
                <div style={{fontSize: "1em", color: "black", }}></div>
                </div>
              </Link>
              </div>)}
        </div>
    
      </>
    )
  }

}


const ConnectedImage = (props) => (
  <AuthConsumer>
      {auth =>
          <Image {...props} auth={auth} />
      }
  </AuthConsumer>
)

export default ConnectedImage
