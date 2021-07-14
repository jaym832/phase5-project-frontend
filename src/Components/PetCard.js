import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'


class PetCard extends React.Component {

  state = {

  }

  renderImages() {

    if (this.props.img[0]) {

      return (
        <div>
          <Card.Img src={this.props.img[0].full} />
        </div>
      )
    }
    if (this.props.img) {

      return (
        <div>
          <Card.Img src={this.props.img} />
        </div>
      )
    } else {
      console.log('im not here')
    }

  }



  render() {
    return (

      <div className='petcard'>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            {this.renderImages()}

            <Card.Title>{this.props.name}</Card.Title>
            {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.age}</ListGroupItem>
            <ListGroupItem>Breed: {this.props.breed.primary}</ListGroupItem>
            <ListGroupItem>Secondary: {this.props.breed.secondary}</ListGroupItem>

            <ListGroupItem>Gender: {this.props.gender}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#" onClick={() => { this.props.favoriteHandle(this.props.pet) }}>Favorite</Card.Link>
            <Card.Link href="#" onClick={() => { this.props.viewPetHandle(this.props.pet) }}>View</Card.Link>
          </Card.Body>
        </Card>

      </div>
    );
  }
}
export default PetCard;