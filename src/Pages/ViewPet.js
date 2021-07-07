import React from 'react'
import {Card,Button,ListGroupItem,ListGroup} from 'react-bootstrap'


class ViewPet extends React.Component{

    state={

    }
    renderImages(){

        if(this.props.petInfo.photos[0]){
  
        return(
          <div >
  
          {this.props.petInfo.photos.map(img => 
          
          <Card.Img  src={img.full}/>
        //   console.log(img.full)
        
          )}
      
           {/* <Card.Img src={this.props.img[0].full}/> */}
          </div>
      )
        }
        else{
          console.log("im not here")
        }
  
      }
 



    render(){
        return(
          
            <div>
               {/* <h1>{this.props.petInfo.name}</h1>
               Age: {this.props.petInfo.age}
               <br></br>
               Description: {this.props.petInfo.description}
               <br></br> */}


                <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.petInfo.name}</Card.Title>
                    <div className='view-dog-image'>

                    {this.renderImages()}

                    </div>

                    <Card.Text>
                    Age: {this.props.petInfo.age}                   
                     </Card.Text>

                     <Card.Text>
                     Breeds: {this.props.petInfo.breeds.primary}
                     </Card.Text>
                     <Card.Text>
                     Gender: {this.props.petInfo.gender}
                     </Card.Text>

                     <Card.Text>
                     Size: {this.props.petInfo.size}
                     </Card.Text>

                     <Card.Text>
                     Species: {this.props.petInfo.species}
                     </Card.Text>

                     <Card.Text>
                     Description: {this.props.petInfo.description}
                     </Card.Text>




                    <Button variant="primary" onClick={()=>{this.props.favoriteHandle(this.props.petInfo)}}>Favorite</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
                </Card>

            </div>
        );
    }
}
export default ViewPet;