import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
  
    return (
      <div style={styles.background}>
        <Segment basic>
          <Header as='h1' textAlign='center' style={styles.text}>Login</Header>
          <Form onSubmit={this.handleSubmit}>
            <label style={{color: 'white'}}>
              Email
              <Form.Input
                autoFocus
                required         
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
            </label>
            <label style={{color: 'white'}}>
              Password
              <Form.Input
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
            </label>
            <Segment textAlign='center' basic>
              <Button primary type='submit'>Submit</Button>
            </Segment>
            <Segment textAlign='center' basic>
              <Button  primary  value='{/register}' as={Link} to="/register"> Register
              </Button>
            </Segment>
          </Form>
        </Segment>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#8a2be2",
    height: "100vh",
  },
  text: {
    color: "white"
  }
}


export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}


