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
<<<<<<< HEAD
       <div style={{display: "flex", flexWrap: "wrap"}}>
         {this.state.images.map(i=>
           <div key={this.state.images.id} style={{ zIndex: "0", textAlign: "Center"}}>
             <Link to={`/image/${i.id}`}>
             <div>
               <iframe title='myframe' width='540' height="440" src={i.image_url}
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
=======
        
       <div style={{display: "flex", flexWrap: "wrap"}}>
         {this.state.images.map(i=>
           <div key={this.state.images.id} style={{margin: "20px", zIndex: "2", textAlign: "Center"}}>
             <Link to={`/image/${i.id}`}>
             <div>
               <iframe title='myframe' width="175%" height="300px" src={'https://cdn-images-1.medium.com/max/1600/0*F64HTcTbkV60DqAL.jpg'}
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fluid"
>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
                 allowfullscreen>
               </iframe>
             </div>
             </Link>
             </div>)}
       </div>
<<<<<<< HEAD
      </>
=======
     
    </>
>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
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
<<<<<<< HEAD
=======

>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
 render() {
   return (
     <>
       <div >
         {this.renderImages()}
       </div>
     </>
   )
 }
<<<<<<< HEAD
}
=======

}

>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
export default ImagesView