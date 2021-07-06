import React from 'react'
import {Link,Redirect} from "react-router-dom";
import {Form,Button} from 'react-bootstrap'



class EditUserPage extends React.Component{

    state={
      
        username:'',
        password:''

    }

    componentDidMount(){
      let postOptions={
        method: "GET",
        mode:'cors',
        credentials:'include',
        headers:{
          'Content-Type': 'application/json'
        
        }
        
      }
      fetch("http://localhost:3000/me",postOptions)
      .then(res=>res.json())
      .then(user=> this.setState({
        username:user.username,
        password:user.password_digest
      }))




    }


 updateUser=(event)=>{
  this.setState({
    ...this.state,
    [event.target.name]:event.target.value

})
    }
    updateHandle(updatedUser){

        // console.log(updatedUser)

        fetch(`http://localhost:3000/update/`,{
            method: "PATCH",
            mode:'cors',
            credentials:'include',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
          })
          .then(res =>res.json())
          .then(data=> console.log(data))

    }



    logoutHandle(){

        
   

        console.log('logging out')
        let postOptions={
        method: "DELETE",
         mode:'cors',
        credentials:'include',
        headers:{
          'Content-Type': 'application/json'
        
        }

      }
      fetch("http://localhost:3000/logout",postOptions)
      .then(res=>res.json())
      .then(data=> console.log(data))


      
      

    }


    // redirectHandle(){
     
      

    //   return 
    //   <div>
    //   <Redirect to="/adopt"/>
    //   </div>
     
      
    // }


    render(){
        return(
<div>

            <h3>Edit User Page:</h3>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control name='username' onChange={this.updateUser} placeholder="" />
  </Form.Group>

 <Form.Group controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' type='password' onChange={this.updateUser}  placeholder="" />
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control name='email' onChange={this.updateUser} placeholder="" />
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control name='f_name' onChange={this.updateUser} placeholder="" />
  </Form.Group>

   <Form.Group controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control name='l_name' onChange={this.updateUser} placeholder="" />
  </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label>Zipcode</Form.Label>
    <Form.Control name='zipcode' onChange={this.updateUser} placeholder="" />
  </Form.Group>

  
  <Button variant="primary" type='reset'  onClick={()=>{this.updateHandle(this.state)}}>
    Submit
  </Button>


  <Button className='logout-button'   onClick={this.logoutHandle}>
    Logout
  </Button>
</Form>

            </div>
        );
    }
}
export default EditUserPage;