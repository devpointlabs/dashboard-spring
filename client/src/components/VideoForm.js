import React from "react"
import axios from "axios"
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Header, } from 'semantic-ui-react';

class VideoForm extends React.Component {
    state = { title: "", description: "", video_url: "",}

    handleChange = (e, { name, value, }) => this.setState({ [name]: value,});

    handleSubmit = (e) => {
        e.preventDefault()
        const u_id = this.props.auth.user.id
        const {match: { params: { id } }, history: { push } } = this.props
        const video = { ...this.state, user_id: u_id }
        axios.post('/api/videos', video)
            .then( res => push("/"))
    }

    render() {
        const { title, description, video_url, } = this.state
        return(
            <>
            <div style={{ margin:"20px", }}>
            <Header as="h1">
                New Video
            </Header>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        required
                        placeholder="Video Title"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        required
                        placeholder="Link"
                        name="video_url"
                        value={video_url}
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        required
                        placeholder="Video Description"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            </>
        )
    }
}



export default VideoForm