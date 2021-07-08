import React from 'react'
import {Link,Redirect} from "react-router-dom";
import { Form,Button } from 'react-bootstrap';
import Navbar from './Navbar'


  


class FindPetForm extends React.Component{
    state={
    gender:'Male',
    type:'Dog'

    }






     setPet=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        
        })
         
    }

    




    render(){
        return(
    <div className="form-div">
 
    What kind of companion are you looking for?
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Zipcode</Form.Label>
    <Form.Control  name="zipcode" placeholder="" onChange={this.setPet} />
  </Form.Group>
       
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type</Form.Label>
    <Form.Control as="select" name='type' onChange={this.setPet}>
        {/* <option></option> */}
      <option>Dog</option>
      <option>Cat</option>
    </Form.Control>
  </Form.Group>

   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Breed</Form.Label>
    <Form.Control  name="breed" placeholder="" onChange={this.setPet} />
  </Form.Group>

   <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Gender</Form.Label>
    <Form.Control as="select" name="gender" onChange={this.setPet}>
        {/* <option></option> */}
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
  </Form.Group>

   <Button onClick={()=>this.props.searchHandle(this.state)} >
    Search
  </Button>

 
  
        </Form>
    
    </div>



        )
    }
}
export default FindPetForm;