import React from 'react'
import axios from 'axios'
import { Card, Image, Button } from 'semantic-ui-react'

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
       
       <Card.Group>      
        <Card>
          <Card.Content>
            <Image floated='right' size='Medium' src={image.image_url} />
            <Card.Header>{ image.title }</Card.Header>
            
            <Card.Description>
      
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={ () => this.deleteImages(image.id) }>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
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
