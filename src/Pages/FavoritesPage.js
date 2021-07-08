import React from 'react'
import {Link} from "react-router-dom";
import FavoritesCard from '../Components/FavoritesCard'
import './FavoritesPage.css'


class FavoritesPage extends React.Component{

    state={
        favoritePets:[],
        viewPetToggle:false
    }

componentDidMount(){

    let postOptions={
        method: "GET",
        mode:'cors',
        credentials:'include',
        headers:{
          'Content-Type': 'application/json'
        
        }
        
      }
      fetch("http://localhost:3000/favorites",postOptions)
      .then(res=>res.json())
      .then(data=> this.setState({favoritePets:data}))

    }

renderFavorites(){
    return(
        <div>
        {this.state.favoritePets.map(data=> <FavoritesCard
            pet={data}
            key={data.pet.id}
            name={data.pet.name}
            gender={data.pet.gender}
            image={data.pet.image}
            type={data.pet.animal_type}
            petUrl={data.pet.url}
            breed={data.pet.breed}
            secondary={data.pet.secondary}
            age={data.pet.age}


          removeHandle={this.removeHandle}
          // viewPetHandle={this.viewPetHandle}
             />)}
          </div>


    )

    }

    removeHandle=(petObj)=>{
        let newArr= this.state.favoritePets.filter(pet=>pet!=petObj)

        this.setState({
            favoritePets:newArr
        })


        fetch(`http://localhost:3000/deletefavorite/${petObj.id}`,{
            method: "DELETE",
            mode:'cors',
            credentials:'include',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res =>res.json())
          .then((newPets) => this.setState({favoritePets:newArr}))

        // console.log(petObj)
        
    } 

    // viewPetHandle=()=>{
    //   console.log('im working')

    // }


    render(){
        return(
            <div className='favorites-container'>
              {this.renderFavorites()}

              {/* {this.state.viewPetToggle?this.viewPetHandle():this.renderFavorites()} */}
            </div>
        );
    }
}
export default FavoritesPage;