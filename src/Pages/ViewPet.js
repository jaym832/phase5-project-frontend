import React from 'react'
import {Card,Button,ListGroupItem,ListGroup} from 'react-bootstrap'


class ViewPet extends React.Component{

    state={

    }
    renderImages(){

        // if(this.props.petInfo.photos[0]){
  
        //   return(
        //     <div >
    
        //       {this.props.petInfo.photos.map(img =>         
        //         <Card.Img  src={img.full}/>
        //       )}
    
        //     </div>
        // )
        // }
        // else{
        //   return(
        //   <div >       
        //   <Card.Img  src={this.props.petInfo.image}/>   
        //   </div>
        //   )
        // }
      if(this.props.petInfo.photos){
        if(this.props.petInfo.photos[0]){
          return(
            <div >
    
              {this.props.petInfo.photos.map(img =>         
                <Card.Img  src={img.full}/>
              )}
    
            </div>
        )
          }
        else{
          return(
            console.log('no picture')
        )
        }
      }
      else{
         return(
          <div >       
          <Card.Img  src={this.props.petInfo.image}/>   
          </div>
          )
      }

  
      }
 



    render(){
        return(
          
            <div>
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
                     Breeds: {this.props.petInfo.breeds?this.props.petInfo.breeds.primary:this.props.petInfo.breed}
                     </Card.Text>
                     <Card.Text>
                     Gender: {this.props.petInfo.gender}
                     </Card.Text>

                     <Card.Text>
                     Size: {this.props.petInfo.size}
                     </Card.Text>

                     <Card.Text>
                     Species: {this.props.petInfo.species?this.props.petInfo.species:this.props.petInfo.animal_type}
                     </Card.Text>

                     <Card.Text>
                     Description: {this.props.petInfo.description}
                     </Card.Text>




                    <Button variant="primary" onClick={()=>{this.props.petInfo.species?this.props.favoriteHandle(this.props.petInfo):this.props.favoriteHandle2(this.props.petInfo)}}>Favorite</Button>
                    <Button href={this.props.petInfo.url}>Contact</Button>

                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
                </Card>

            </div>
        );
    }
}
export default ViewPet;