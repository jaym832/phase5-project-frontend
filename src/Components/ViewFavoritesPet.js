import React, { Component } from 'react'
import { Card, Button, ListGroupItem, ListGroup } from 'react-bootstrap'
import MessageForm from './MessageForm'


export class ViewFavoritesPet extends Component {

    state = {
        messageToggle: false
    }


    messageRequestHandle = (petInfo) => {
        this.setState({ messageToggle: true })


    }





    render() {
        return (
            this.state.messageToggle ? <MessageForm petInfo={this.props.petInfo.pet} /> :
                <div>
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.petInfo.pet.name}</Card.Title>
                            <div className='view-dog-image'>
                                <Card.Img src={this.props.petInfo.pet.image} />



                            </div>

                            <Card.Text>
                                Age: {this.props.petInfo.pet.age}
                            </Card.Text>

                            <Card.Text>
                                Breeds: {this.props.petInfo.pet.breed}
                            </Card.Text>
                            <Card.Text>
                                Gender: {this.props.petInfo.pet.gender}
                            </Card.Text>

                            <Card.Text>
                                Size: {this.props.petInfo.pet.size}
                            </Card.Text>

                            <Card.Text>
                                Species: {this.props.petInfo.pet.animal_type}
                            </Card.Text>

                            <Card.Text>
                                Description: {this.props.petInfo.pet.description}
                            </Card.Text>





                            <Button variant="primary" href={this.props.petInfo.pet.url} onClick={this.props.petInfo.pet.rehome ? () => { this.messageRequestHandle(this.props.petInfo) } : null}>Contact</Button>

                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>

                </div>
        )
    }
}

export default ViewFavoritesPet
