import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';


export class MessageForm extends Component {

    state = {
        body: '',
        pet: this.props.petInfo
    }


    submitMessageHandle = () => {

        let obj = this.state

        let postOptions = {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(obj)

        }
        fetch("http://localhost:3000/newconvo", postOptions)
            .then(res => res.json())
            .then(data => console.log(data))




    }

    setMessage = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value

        })

    }






    render() {
        return (
            <div className='form-div'>
                <Form>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control name='body' as="textarea" rows={3} onChange={this.setMessage} />
                    </Form.Group>


                    <Button onClick={() => this.submitMessageHandle()}>send</Button>
                </Form>
            </div>
        )
    }
}

export default MessageForm
