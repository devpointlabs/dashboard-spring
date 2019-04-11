import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthConsumer, } from "../providers/AuthProvider";

class Images extends React.Component {
  state = { images: [] }
  
  componentDidMount() {
    axios.get(`/api/images`)
      .then(res =>
        this.setState({ images: res.data }))
  }

  render() {
    return (
      <>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.images.map(i=> 
            <div key={this.state.images.id} style={{margin: "20px", zIndex: "2", textAlign: "Center"}}> 
              <Link to={`/image/${i.id}`}>    
              <div>
                <iframe width="175%" height="300px" src={i.image_url}
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fluid" 
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
const ConnectedImage = (props) => (
  <AuthConsumer>
      {auth =>
          <Images {...props} auth={auth} />
      }
  </AuthConsumer>
)
export default ConnectedImage