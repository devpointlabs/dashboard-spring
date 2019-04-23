import React from 'react';
import {Header, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class complete extends React.Component {
  render () {
    return (
<>
<Link to='/'>
         
<Image  src='https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/169539145.png?x-amz-meta-iv=1&x-amz-meta-ck=5a81039525e5126ffd527a9f9f49b565&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1559347200&Signature=Dc%2F8OCYmDaB%2Bnuiii%2BJQjcKHheo%3D' />
      
 </Link>
 <Header as='h1'>
   Submission Complete
 </Header>
</>
    )}
    }   
export default complete;