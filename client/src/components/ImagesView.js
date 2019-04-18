import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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
       <div style={{display: "flex", flexWrap: "wrap"}}>
         {this.state.images.map(i=>
           <div key={this.state.images.id} style={{ zIndex: "0", textAlign: "Center"}}>
             <Link to={`/image/${i.id}`}>
             <div>
<<<<<<< HEAD
               <iframe title='myframe' width='220%' height="300px" src={i.image_url}
=======

               <iframe title='myframe' width='700' height="440" src={i.image_url}

>>>>>>> 732981b3f893319b189415d1c877fdbd120684ff
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
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