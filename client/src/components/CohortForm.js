import React from 'react';

import { Form, Header, Image, Container} from "semantic-ui-react";

import axios from "axios";
import {Link, withRouter} from 'react-router-dom'

class CohortForm extends React.Component {
  defaultValues = { season: "", year: "" };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const cohort = { ...this.state, };
    axios.post("/api/cohorts", cohort)
      .then( res => {
        this.props.history.push("/complete");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (c) => {
    const{ name, value, } = c.target
    this.setState({ [name]: value, });
  }

  render () {
    const { season, year } = this.state;

    return (
      <Container style={styles.background}>
       <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
         </Link>
        <Header as="h1" style={styles.text}>Set Season and Year</Header> 
        
      <Form onSubmit={this.handleSubmit}>
            <label style={{color: 'white'}}>Season</label>
            <Form.Input 
             
              name="season"
              autoFocus
              placeholder="Season"
              value={season}
              onChange={this.handleChange}
              required
              />
            <label style={{color: 'white'}}>Year</label>
            <Form.Input 
             
             name="year"
              placeholder="Year"
              value={year}
              onChange={this.handleChange}
              required
            />
          
          
          <Form.Button color="cyan">Submit</Form.Button>
         
        </Form>
      </Container>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#6E54A3",
    height: "100vh",
    width: "100vh"
  },
  text: {
    color: "white"
  }
}

export default withRouter(CohortForm);