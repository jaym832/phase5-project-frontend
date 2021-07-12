import React from 'react'
import './CreateUser.css'
import { Form,Button } from 'react-bootstrap';


class CreateUser extends React.Component{
    state={ username:'',
            password:'',
            email:'',
            zipcode:'',
            f_name:'',
            l_name:'',
            

    }

    setUser=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        
        })
    }

    signup=(user)=>{
        let postOptions={
            method: "POST",
            headers:{
              'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(user)

          }
          fetch("http://localhost:3000/newuser",postOptions)
          .then(res=>res.json())
          .then(data=> console.log(data))
          
           this.props.history.push('/');

    }



    render(){

        return(

<div className="create-user-form">
    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" name='username' placeholder="" onChange={this.setUser} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="" onChange={this.setUser}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control  name='f_name' placeholder="" onChange={this.setUser}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control  name='l_name' placeholder="" onChange={this.setUser}/>
        </Form.Group>


        <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control  name='email' placeholder="" onChange={this.setUser}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control  name='zipcode' placeholder="" onChange={this.setUser}/>
        </Form.Group>


     

        <Button onClick={()=>this.signup(this.state)} >
            Signup
        </Button>

        </Form>          
        
     </div>


        );
    }


}
export default CreateUser;