import React from 'react'
import {Link} from "react-router-dom";
import PetCard from './PetCard'


const PetContainer=(props)=>{
    return(
        <div className="pet-container">
        {props.pets.map(pet=> <PetCard
            pet={pet}
            key={pet.id}
            name={pet.name}
            gender={pet.gender}
            img={pet.photos}

            type={pet.type}
            petUrl={pet.url}
            breed={pet.breeds}
            age={pet.age}

            viewPetHandle={props.viewPetHandle}
            favoriteHandle={props.favoriteHandle}
        />)}
        
        </div>


    )



}
export default PetContainer;