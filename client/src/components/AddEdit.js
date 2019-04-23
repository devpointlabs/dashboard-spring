import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Card, Button, Modal, Image, Header, Container } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import EventsEdit from './EventsEdit'
import EventsForm from './EventsForm'
import ImagesEdit from './ImagesEdit'
import ImagesForm from './ImagesForm'
import VideoEdit from './VideoEdit'
import VidoeForm from './VideoForm'
import TopicEdit from './TopicEdit'
import TopicsForm from './TopicsForm'
// import SeasonYearForm from './SeasonYearForm'

class AddEdit extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <div position='right'>
          <Button color='white'
            onClick={ () => handleLogout(this.props.history) }
          > Logout
          </Button>
        </div>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <>
         <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
         </Link>
          <div>{ this.rightNavItems() }</div>
      <Container>


          <br/>
          <br/>


             <Card>
              <Card.Content>
                <Card.Header>Dashboard</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/'>
                  <Button basic color='purple'>
                    To Dash
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>

          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Add Topics</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Add Topic</Button>}>
                <Modal.Header>Add Topic</Modal.Header>
                 <Modal.Content>
                  <TopicsForm/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Topic</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Delete Topic</Button>}>
                <Modal.Header>Select a topic to delete.</Modal.Header>
                 <Modal.Content>
                  <TopicEdit/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Add Video</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Add Video</Button>}>
                <Modal.Header>Add Video</Modal.Header>
                 <Modal.Content>
                  <VidoeForm/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Video</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Delete Video</Button>}>
                <Modal.Header>Select a video to delete.</Modal.Header>
                 <Modal.Content>
                  <VideoEdit/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Add Image</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Add Image</Button>}>
                <Modal.Header>Add an Image</Modal.Header>
                 <Modal.Content>
                  <ImagesForm/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Image</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Delete Image</Button>}>
                <Modal.Header>Select an image to delete.</Modal.Header>
                 <Modal.Content>
                  <ImagesEdit/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group>

            <Card>
              <Card.Content>
                <Card.Header>Add Event</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Add Event</Button>}>
                <Modal.Header>Add an Event</Modal.Header>
                 <Modal.Content>
                  <EventsForm/>
                 </Modal.Content>
              </Modal>
              {/* <Modal trigger={<Button basic color='purple'>Set Season/Year</Button>}>
                <Modal.Header>Set Season/Year</Modal.Header>
                 <Modal.Content>
                  <SeasonYearForm/>
                 </Modal.Content>
              </Modal> */}
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Event</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Modal trigger={<Button basic color='purple'>Delete Event</Button>}>
                <Modal.Header>Select an Event to delete.</Modal.Header>
                 <Modal.Content>
                  <EventsEdit/>
                 </Modal.Content>
              </Modal>
              </Card.Content>
            </Card>
          </Card.Group>

     
      </Container>
      </>
    )
  }
}

export class ConnectedAddEdit extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <AddEdit { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedAddEdit);