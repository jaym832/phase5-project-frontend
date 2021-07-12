import React, { Component } from 'react'
import { Form,Button,Card } from 'react-bootstrap';


export class ConversationView extends Component {

    state={
        body:'',
        conversationID:this.props.currentConversation.id

    }

    sendMessageHandle=()=>{
        let obj={
            body:this.state.body,
            id:this.state.conversationID
        }

     let postOptions={
            method: "POST",
            mode:'cors',
            credentials:'include',
            headers:{
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(obj)

      }
      fetch("http://localhost:3000/newmessage",postOptions)
      .then(res=>res.json())
      .then(data=> console.log(data))

    }

    renderMessageDetails=()=>{
            return(
            <div>
                {this.props.currentConversation.messages.map(message =>(
                    
                        <div>
                        <Card.Text>{message.body}</Card.Text>
                        </div>
                    
                         ))}
             
                </div>
        
            )
        // console.log(this.props.currentConversation.messages)


    }

        setMessage=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        
        })
          
    }




    render() {
        return (
            <div>

                <Card>
                    <Card.Body>
            {this.renderMessageDetails()}
              
                        <Form>
                              <Form.Control name='body' type="text" onChange={this.setMessage} />

                        </Form>
                        <br></br>
                        
                        <Button  type='submit' onClick={()=>{this.sendMessageHandle()}}>send</Button>

                    </Card.Body>
                </Card>


           </div>
        )
    }
}

export default ConversationView
