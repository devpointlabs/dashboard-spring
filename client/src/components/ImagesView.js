import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ImagesView.css';

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
             <Link to={`/image/${i.id}`}>
             <div class="resp-container">
               <iframe class="resp-iframe" title='myframe' src={i.image_url}
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