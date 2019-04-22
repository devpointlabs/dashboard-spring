import React from 'react'
import axios from 'axios'
import { Card, Image, Button, } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

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
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      
     )
   )
  }

  render () {
    return (
      <>
      <Link to='/'>
         
      <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
   
      </Link>
      <div>{this.renderImages()}</div>
      </>
   
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
  }
}

export default withRouter(ImagesEdit)
