import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Card, Button } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class AddEdit extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        <iframe src="http://free.timeanddate.com/clock/i6pzp2mf/n220/fn7/fs20/fc5900b3/tct/pct/ftb/th2" frameborder="0" width="128" height="30" allowTransparency="true"></iframe>
        </Menu.Menu>
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
      <div>
          <Button>{ this.rightNavItems() }</Button>
          <Card.Group>

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

     
      </div>
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