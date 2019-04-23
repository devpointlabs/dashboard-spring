import React from 'react'
import axios from 'axios'
import { Header, Button, Card, Container, Image } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

class CohortEdit extends React.Component {
  state = { cohorts: [], };

  componentDidMount() {
    axios.get("/api/cohorts")
      .then( res => {
        this.setState({ cohorts: res.data, });
      })
  }

  deleteCohort = (id) => {
    axios.delete(`/api/cohorts/${id}`)
      .then( res => {
        const { cohorts, } = this.state;
        this.setState({ cohorts: cohorts.filter(cohort => cohort.id !== id), })
      })
  }

  renderCohorts = () => {
    const { cohorts } = this.state

    return cohorts.map( cohort => (
      <Container>
      <Card.Group>      
        <Card>
          <Card.Content>
            <Card.Header>{ cohort.season }{ cohort.year}</Card.Header>
            
            <Card.Description>
              Season Year
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={ () => this.deleteCohort(cohort.id) }>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      </Container>
      
     )
   )
  }

  render () {
    return (
      <>
      <Container>
      <Link to='/'>
         
         <Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
      </Link>
      <div>{this.renderCohorts()}
      <br/>
      </div>
      </Container>
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

export default withRouter(CohortEdit)