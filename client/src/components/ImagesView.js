import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'


class ImagesView extends React.Component {
 state = { images: [] }

 componentDidMount() {
   axios.get(`/api/images`)
     .then(res =>
       this.setState({ images: res.data }))
 }

 renderImages = () => {
  const { images } = this.state

  switch (images.length) {
    case 1 :
    return images.map( images => (
      <>
        <div>
          {this.state.images.map(i=>
          <div key={this.state.images.id} style={{ zIndex: "0", textAlign: "Center"}}>
            
              <div>
                <Image style={{height: '50vh',width: '100vh',border: '0',position: 'absolute',top:'0',left:'0',}} src={i.image_url} resizeMode="stretch"/>
              </div>
           
          </div>)}
        </div>
      </>
    )
    )
    case 0 : 
    return (
      <>
        <h1>You don't have any Images </h1>
        <Link to="/imagesform">Add an Image</Link>
      </>
    )
    default :
    return (
      <>
        <h1>You Have Too Many Images </h1>
        <Link to="/imagesedit">Manage Images</Link>
      </>
    )
  }
}
 render() {
   return (
     <>
       <div >
         {this.renderImages()}
      
       </div>
              
       
     </>
   )
 }
}
export default ImagesView