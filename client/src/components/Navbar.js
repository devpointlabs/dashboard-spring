import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
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
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='Dashboard'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/topicsform'>
            <Menu.Item
              name='Add Topic'
              id='topic'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
          <Link to='/topics/edit'>
            <Menu.Item
              name='Topic Edit'
              id='topic edit'
            />
          </Link>
          <Link to='/videoform'>
            <Menu.Item
              name='Add Video'
              id='video'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
          <Link to='/videoedit'>
            <Menu.Item
              name='Video Edit'
              id='video edit'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
          <Link to='/imagesform'>
            <Menu.Item
              name='Add Image'
              id='image'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
          <Link to='/imagesedit'>
            <Menu.Item
              name='Image Edit'
              id='image edit'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
          <Link to='/eventsform'>
            <Menu.Item
              name='Add Event'
              id='event'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
          <Link to='/eventsedit'>
            <Menu.Item
              name='Event Edit'
              id='event edit'
              active={this.props.location.pathname === '/topicsform'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);