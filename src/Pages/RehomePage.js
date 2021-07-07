import React from 'react'
import {Link} from "react-router-dom";
import {Form,Button} from 'react-bootstrap'



class RehomePage extends React.Component{

    state={
        rehome:true


    }

postPetHandle=(pet)=>{

    let postOptions={
        method: "POST",
        mode:'cors',
        credentials:'include',
        headers:{
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(pet)

      }
      fetch("http://localhost:3000/newpet",postOptions)
      .then(res=>res.json())
      .then(data=> console.log(data))

    //   console.log(this.state)



}



   setPet=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        
        })
         
    }

render(){
return(
<div className='form-div'>

 <h3>Pet Information:</h3>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name:</Form.Label>
    <Form.Control name='name' onChange={this.setPet} placeholder="" />
  </Form.Group>

   <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Age:</Form.Label>
    <Form.Control name='age'as="select" onChange={this.setPet}>
      <option></option>
    <option>Baby</option>
    <option>Young</option>
    <option>Adult</option>
    <option>Senior</option>
    </Form.Control>
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>Breed:</Form.Label>
    <Form.Control name='breed' onChange={this.setPet} placeholder="" />
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>Secondary:</Form.Label>
    <Form.Control name='secondary' onChange={this.setPet} placeholder="" />
  </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Animal Type:</Form.Label>
    <Form.Control name='animal_type' as="select" onChange={this.setPet} >
      <option></option>
      <option>Dog</option>
      <option>Cat</option>
    </Form.Control>
  </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Gender:</Form.Label>
    <Form.Control name='gender' as="select" onChange={this.setPet}>
      <option></option>
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>Image:</Form.Label>
    <Form.Control name='image' onChange={this.setPet} placeholder="" />
  </Form.Group>

    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description:</Form.Label>
    <Form.Control name="description" as="textarea" rows={3} onChange={this.setPet}/>
  </Form.Group>

  
  <Button variant="primary" type='submit' onClick={()=>{this.postPetHandle(this.state)}} >
    Submit
  </Button>


 
</Form>


            </div>
        );
    }
}
export default RehomePage;