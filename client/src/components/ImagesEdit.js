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

export default ImagesEdit