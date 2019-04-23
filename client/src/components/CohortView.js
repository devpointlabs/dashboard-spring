import React from 'react';
import { Header, Table, } from 'semantic-ui-react';
import axios from 'axios'
import {Link, } from 'react-router-dom'


class CohortView extends React.Component {


  state = { cohorts: [], };

  componentDidMount() {
    axios.get("/api/cohorts")
      .then( res => {
        this.setState({ cohorts: res.data, });
      })
  }

  renderCohorts = () => {
    const { cohorts, } = this.state
    switch  (cohorts.length) {

      case 1 :
      return (
      <>
      
      <Header textAlign='center' as='h1'>Calender of Events</Header>
      {cohorts.map( cohort => (
      
      <Header textAlign='center' as='h3'>{cohort.season}-{cohort.year}</Header>))}
    {
      
      
      
  }
      </>
  )
      

      case 0 : 
      return (
        <>
          <h1>You don't have any Cohorts </h1>
          <Link to="/cohortform">Add A Cohort</Link>
        </>
      )
      default :
      return (
        <>
          <h1>You Have Too Many Cohorts </h1>
          <Link to="/cohortedit">Manage Cohorts</Link>
        </>
      )
  }
}
    
  render() {
    return (
      <div overflow='visible'>
      
        <div as='h1' textAlign='center'>{ this.renderCohorts() }</div>
      </div>
    )
  }
}
const BackgroundStyles = {
    backgroundColor:`grey`,
  }
    
export default CohortView;