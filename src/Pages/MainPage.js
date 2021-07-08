import React from 'react'
import {Link} from "react-router-dom";
import FindPetForm from '../Components/FindPetForm';
import Navbar from '../Components/Navbar'
import PetContainer from '../Components/PetContainer'
import ViewPet from './ViewPet';

  var key= 'Hrn3nlUzSUdRWV3Bd0NAQlh6cvuGH6AmRKmgZqB9dEBhsiJBRE'
    var secret='RYLDs3NUOe8yQ0YD3mEPJj1jtuGOYYePSpMrm2nV'
    
class MainPage extends React.Component{
    state={
        pets:[],
        searchToggle:false,
        viewToggle:false,
        currentPet:{}

    }


    componentDidMount(){
        fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        })
        .then(res=>res.json())
        .then(data =>this.setState({data}))

    }


       searchHandle=(petInfo)=>{

        fetch(`https://api.petfinder.com/v2/animals?breed=${petInfo.breed}&location=${petInfo.zipcode}&gender=${petInfo.gender}`, {
		headers: {
			'Authorization': this.state.data.token_type + ' ' + this.state.data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
        .then(res=>res.json())
        .then(data=> this.setState({
            pets:data.animals,
            searchToggle:true
        }))

    }

    favoriteHandle(pet){
        

        if(pet.photos[0]){
            let newPet= {
                name: pet.name,
                animal_type:pet.type,
                breed:pet.breeds.primary,
                secondary:pet.breeds.secondary,
                age:pet.age,
                description:pet.description,
                gender:pet.gender,
                image:pet.photos[0].full,
                status:pet.status,
                url:pet.url,
                rehome:false
            }
             let postOptions={
            method: "POST",
            mode:'cors',
            credentials:'include',
            headers:{
            'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(newPet)

              }
            fetch("http://localhost:3000/newpet",postOptions)
            .then(res=>res.json())
            .then(data=> console.log(data))

    // console.log(newPet)
        
        }
        else {
            let newPet= {
            name: pet.name,
            animal_type:pet.type,
            breed:pet.breeds.primary,
            secondary:pet.breeds.secondary,
            age:pet.age,
            description:pet.description,
            gender:pet.gender,
            image:null,
            status:pet.status,
            url:pet.url,
            rehome:false
        }

         let postOptions={
            method: "POST",
            mode:'cors',
            credentials:'include',
            headers:{
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(newPet)

      }
      fetch("http://localhost:3000/newpet",postOptions)
      .then(res=>res.json())
      .then(data=> console.log(data))

    // console.log(newPet)


        }


    }

     viewPetHandle=(pet)=>{
      this.setState({viewToggle:true,
        currentPet:pet
    })
      console.log(pet)

     

    }

    // renderPetInfo=(pet)=>{
    //     return(
    //     <div>
    //         <ViewPet/>
    //     </div>
    //     )

    // }


    render(){
        return(
            <div>
               
        {this.state.viewToggle?<ViewPet petInfo={this.state.currentPet} favoriteHandle={this.favoriteHandle}/>:this.state.searchToggle?<PetContainer pets={this.state.pets} favoriteHandle={this.favoriteHandle} viewPetHandle={this.viewPetHandle}/>:<FindPetForm petInfo={this.state}
                searchHandle={this.searchHandle}  
                />}
            </div>
        );
    }
}
export default MainPage;