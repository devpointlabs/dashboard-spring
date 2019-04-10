import React from "react"
import axios from "axios"
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Header, } from 'semantic-ui-react';

class ImageForm extends React.Component {
  state = { image_url: "",}

  handleChange = (e, { name, value, }) => this.setState({ [name]: value,});

  handleSubmit = (e) => {
        e.preventDefault()
        const u_id = this.props.auth.user.id
        const {match: { params: { id } }, history: { push } } = this.props
        const image = { ...this.state, user_id: u_id }
        axios.post('/api/images', image)
            .then( res => push("/"))
    }

  render() {
        const { image_url, } = this.state
        return(
            <>
            <div style={{ margin:"20px", }}>
            <Header as="h1">
                New Image
            </Header>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        required
                        placeholder="Link"
                        name="image_url"
                        value={image_url}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            </>
        )
    }
}

const ConnectedImageForm = (props) => (
    <AuthConsumer>
        {auth =>
            <ImageForm {...props} auth={auth} />
        }
    </AuthConsumer>
)

export default ConnectedImageForm