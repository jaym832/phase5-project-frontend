import React, { useRef } from 'react';
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';
import './Login.css'
import { Redirect, useParams } from 'react-router';


class LoginPage extends React.Component{
    state={
        username:'',
        password:'',
        loggedin:false
   
    }
    
    setUser=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        
        })
          
    }



    // login=(user)=>{
    //     let postOptions={
    //         method: "POST",
    //         headers:{
    //           'Content-Type': 'application/json'
            
    //         },
    //         body: JSON.stringify(user)

    //       }
    //       fetch("http://localhost:3000/login",postOptions)
    //       .then(res=>res.json())
    //       .then(data=> data.username?this.setState({loggedin:true}):null)

    
    
        
    // }

    // test(){
    //   if(this.state.loggedin==true){
    //     return <Redirect to="/adopt"/>
    //   }
    // }


render(){

return(
<div className='img-div'>
<div className="login-form">
{/* {this.test()} */}
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" name='username' placeholder="Enter username" onChange={this.setUser} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" onChange={this.setUser}/>
  </Form.Group>


  <Button onClick={()=>this.props.getLogIn(this.state)}  >
    Login
  </Button>

</Form>
<br></br>

<a href="http://localhost:3001/createuser">create account</a>

</div>
</div>
);

}


}
export default LoginPage;