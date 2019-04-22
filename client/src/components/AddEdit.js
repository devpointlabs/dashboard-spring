import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Card, Button, Modal, Image, Header, Container } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class AddEdit extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <div position='right'>
          <Button
            name='logout'
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
      <Container>

          <Button>{ this.rightNavItems() }</Button>
          <br/>
          <br/>


             <Card>
             <Image src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/141264491.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=GsqlvlhYAqK2NGW3fSA4FqSMWEQ%3D' />
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
                <div >
                  <Link to='/topicsform'>
                  <Button basic color='purple'>
                    Add Form
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Topic</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/topics/edit'>
                  <Button basic color='purple'>
                    Delete Topic
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Add Video</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/videoform'>
                  <Button basic color='purple'>
                    Add Video
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Video</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/videoedit'>
                  <Button basic color='purple'>
                    Delete Video
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Add Image</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/imagesform'>
                  <Button basic color='purple'>
                    Add Image
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Image</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/imagesedit'>
                  <Button basic color='purple'>
                    Delete Image
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group>

            <Card>
              <Card.Content>
                <Card.Header>Add Event</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/eventsform'>
                  <Button basic color='purple'>
                    Add Event
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Delete Event</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div >
                  <Link to='/eventsedit'>
                  <Button basic color='purple'>
                    Delete Event
                  </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>

     
      </Container>
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