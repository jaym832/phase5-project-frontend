import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


export class EditRehomeForm extends Component {
  state = {
    id: this.props.currentPet.id

  }



  updateRehome = (event) => {

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value

    })
  }


  rehomeHandle = () => {


    fetch(`http://localhost:3000/update-rehome/`, {
      method: "PATCH",
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => console.log(data))



  }



  render() {
    return (
      <div className='form-div'>

        <h3>Edit Rehome:</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control name='name' onChange={this.updateRehome} placeholder="" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Age:</Form.Label>
            <Form.Control name='age' as="select" onChange={this.updateRehome}>
              <option></option>
              <option>Baby</option>
              <option>Young</option>
              <option>Adult</option>
              <option>Senior</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Breed:</Form.Label>
            <Form.Control name='breed' onChange={this.updateRehome} placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Secondary:</Form.Label>
            <Form.Control name='secondary' onChange={this.updateRehome} placeholder="" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Animal Type:</Form.Label>
            <Form.Control name='animal_type' as="select" onChange={this.updateRehome} >
              <option></option>
              <option>Dog</option>
              <option>Cat</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Gender:</Form.Label>
            <Form.Control name='gender' as="select" onChange={this.updateRehome}>
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Image:</Form.Label>
            <Form.Control name='image' onChange={this.updateRehome} placeholder="" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description:</Form.Label>
            <Form.Control name="description" as="textarea" rows={3} onChange={this.updateRehome} />
          </Form.Group>


          <Button variant="primary" type='submit' onClick={() => { this.rehomeHandle() }} >
            Submit
          </Button>



        </Form>


      </div>
    )
  }
}

export default EditRehomeForm
