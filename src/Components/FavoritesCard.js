import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap'


class FavoritesCard extends React.Component{




render(){
    return(
          
          <div className='petcard'>
                  
          <Card style={{ width: '18rem' }}>
            <Card.Body>
          <Card.Img src={this.props.image}/>
              <Card.Title>{this.props.name}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{this.props.age}</ListGroupItem>
              <ListGroupItem>Breed:{this.props.breed} </ListGroupItem>
                  <ListGroupItem>Secondary:{this.props.secondary} </ListGroupItem>

              <ListGroupItem>Gender:{this.props.gender} </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" onClick={()=>{this.props.viewPetHandle(this.props.pet)}}  >View</Card.Link>
              <Card.Link href="#" onClick={()=>{this.props.removeHandle(this.props.pet)}}>Remove</Card.Link>
              
            </Card.Body>
          </Card>

            </div>
            
        );
    }
}
export default FavoritesCard;