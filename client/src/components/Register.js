import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Image, Form, Segment, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, } = this.state;
    
    return (
      <div style={styles.background}>
        <Container>
        <Segment basic>
        <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
         </Link>
          <Header as='h1' textAlign='center' style={styles.text}>Register</Header>
          <Form onSubmit={this.handleSubmit}>
            <label style={{color: 'white'}}>Email</label>
              <Form.Input
                required
                autoFocus
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
                />
            <label style={{color: 'white'}}>Password</label>
              <Form.Input
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
                />
            <label style={{color: 'white'}}>Password Confirmation</label>
              <Form.Input
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={this.handleChange}
                />
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
              <Segment textAlign='center' basic>
                <Button  primary  value='{/login}' as={Link} to="/login"> Login
                </Button>
              </Segment>
          </Form>
        </Segment>
      </Container>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
  },
  text: {
    color: "white"
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
