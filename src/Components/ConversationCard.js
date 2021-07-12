import React, { Component } from 'react'
import { Form,Button,Card } from 'react-bootstrap';


export class ConversationCard extends Component {
        state={
            messageToggle:false,
            
        }

    renderMessages=()=>{

        return(
            <div>
            {this.props.messages.map(message =>(
                <div>
            <Card.Body>{message.body}</Card.Body>
            </div>
            ))}
            
            
            </div>
        )
    }

    // deleteHandle=(conversation)=>{
    //     console.log(conversation.id)


    //     let newArr= this.state.favoritePets.filter(pet=>pet!=petObj)

    //     this.setState({
    //         favoritePets:newArr
    //     })

    //      fetch(`http://localhost:3000/deletefavorite/${petObj.id}`,{
    //         method: "DELETE",
    //         mode:'cors',
    //         credentials:'include',
    //         headers:{
    //           'Content-Type': 'application/json'
    //         }
    //       })
    //       .then(res =>res.json())
    //       .then((newPets) => this.setState({favoritePets:newArr}))


    // }


 

    render() {
        return (

            <div>
    
                <Card className='conversation-card-div' >
                  <Card.Body>{this.props.messageTitle.body}</Card.Body>

                  <Button className="convo-delete-button" onClick={()=>this.props.deleteHandle(this.props.conversation)}>delete</Button>
                  <br></br>
                <Button onClick={()=>this.props.viewMessageHandle(this.props.conversation)} className="convo-view-button" >View</Button>

                </Card>
            </div>
        )
    }
}

export default ConversationCard
