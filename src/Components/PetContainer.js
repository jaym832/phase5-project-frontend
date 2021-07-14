import React from 'react'
import { Link } from "react-router-dom";
import PetCard from './PetCard'
import PetCard2 from './PetCard2'


const PetContainer = (props) => {
    return (
        <div className="pet-container">
            {props.pets.map(pet => <PetCard
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

            {props.pets2.map(pet => <PetCard2

                pet={pet}
                key={pet.id}
                img={pet.image}
                name={pet.name}
                age={pet.age}
                gender={pet.gender}
                type={pet.animal_type}
                breed={pet.breed}
                secondary={pet.secondary}

                viewPetHandle={props.viewPetHandle}
                favoriteHandle={props.favoriteHandle2}









            />)}

        </div>


    )



}
export default PetContainer;