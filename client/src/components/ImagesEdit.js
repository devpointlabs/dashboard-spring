import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

class ImagesEdit extends React.Component {
  state = { images: [], };

  componentDidMount() {
    axios.get("/api/images")
      .then( res => {
        this.setState({ images: res.data, });
      })
  }

  deleteImages = (id) => {
    axios.delete(`/api/images/${id}`)
      .then( res => {
        const { images, } = this.state;
        this.setState({ images: images.filter(image => image.id !== id), })
      })
  }

  renderImages = () => {
    const { images } = this.state

    return images.map( image => (
      <>
       <button onClick={ () => this.deleteImages(image.id) }>Delete</button>
       <Header>
        { image.title }
       </Header>
      </>
     )
   )
  }

  render () {
    return (
      <div>{this.renderImages()}</div>
    )
  }
}

<<<<<<< HEAD
export default ImagesEdit
=======
<<<<<<< HEAD
export default ImagesEdit
=======
export default ImagesEdit
>>>>>>> d42f565b8fdfa19c9967390c2fb7c87742eadd1c
>>>>>>> 1227ad4623137909d88c6d0a037f1854ae0b42e8
