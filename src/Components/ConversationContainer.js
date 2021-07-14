import React from 'react'
import { Link } from "react-router-dom";
import ConversationCard from './ConversationCard'



const ConversationContainer = (props) => {
    return (
        <div>
            {props.conversations.map(conversation => <ConversationCard
                conversation={conversation}
                key={conversation.id}
                messageTitle={conversation.messages[0]}
                messages={conversation.messages}





                viewMessageHandle={props.viewMessageHandle}
                deleteHandle={props.deleteHandle}

            />)}


        </div>


    )



}
export default ConversationContainer;