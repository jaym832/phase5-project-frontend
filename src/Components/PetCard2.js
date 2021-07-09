import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap'


class PetCard extends React.Component{

    state={

    }

    renderImages(){

 

    }



    render(){
        return(
          
 <div className='petcard'>
        
<Card style={{ width: '18rem' }}>
  <Card.Body>
         <Card.Img src={this.props.img}/>
 
    <Card.Title>{this.props.name}</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.props.age}</ListGroupItem>
    <ListGroupItem>Breed:{this.props.breed}</ListGroupItem>
        <ListGroupItem>Secondary:{this.props.secondary} </ListGroupItem>

    <ListGroupItem>Gender:{this.props.gender} </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" onClick={()=>{this.props.favoriteHandle(this.props.pet)}}>Favorite</Card.Link>
    <Card.Link href="#" onClick={()=>{this.props.viewPetHandle(this.props.pet)}}>View</Card.Link>
  </Card.Body>
</Card>

            </div>
        );
    }
}
export default PetCard;