import React from 'react'
import axios from 'axios'
import { Card, Image, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
        this.props.history.push("/imagesedit")
      })
  }

  renderImages = () => {
    const { images } = this.state
    return images.map( image => (
      
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
              <Link to='/addedit'>
                  <Button  basic color='purple'>
                    Back
                 </Button>
                </Link>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      
     )
   )
  }

  render () {
    return (
      <div>{this.renderImages()}
      <Link to='/addedit'>
                  <Button  basic color='white'>
                    Control panel
                 </Button>
                </Link></div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
  }
}

export default ImagesEdit
