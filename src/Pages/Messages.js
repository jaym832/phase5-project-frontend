import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import ConversationContainer from '../Components/ConversationContainer'
import ConversationView from '../Components/ConversationView'


export class Messages extends Component {

    state = {
        conversations: [],
        viewMessageToggle: false,
        currentConversation: {}
    }

    componentDidMount() {
        let postOptions = {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'

            }

        }
        fetch("http://localhost:3000/conversations", postOptions)
            .then(res => res.json())
            .then(data => this.setState({ conversations: data }))

    }

    viewMessageHandle = (conversation) => {
        this.setState({ viewMessageToggle: true, currentConversation: conversation })

    }

    deleteHandle = (conversationObj) => {
        // console.log(conversation.id)


        let newArr = this.state.conversations.filter(conversation => conversation != conversationObj)

        this.setState({
            conversations: newArr
        })

        fetch(`http://localhost:3000/deleteconvo`, {
            method: "DELETE",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(conversationObj)
        })
            .then(res => res.json())
            .then((newConversations) => this.setState({ conversations: newArr }))


    }



    render() {
        return (
            <div className='messages-div'>

                {this.state.viewMessageToggle ? <ConversationView currentConversation={this.state.currentConversation} /> : <ConversationContainer deleteHandle={this.deleteHandle} viewMessageHandle={this.viewMessageHandle} conversations={this.state.conversations} />}


            </div>
        )
    }
}

export default Messages
