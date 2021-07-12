import React from 'react'
import RehomeCard from '../Components/RehomeCard'
import './RehomeView.css'
import EditRehomeForm from '../Components/EditRehomeForm'


class RehomeView extends React.Component{

    state={
        pets:[],
        editToggle:false,
        currentPet:{}


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
      fetch("http://localhost:3000/rehomings",postOptions)
      .then(res=>res.json())
      .then(data=> {
          data.map(user=> this.setState({pets:[...this.state.pets,user.pet]}))
      });

    }


    renderRehoming(){
    return(
        <div>
        {this.state.pets.map(data=> <RehomeCard
            pet={data}
            key={data.id}
            name={data.name}
            gender={data.gender}
            image={data.image}
            type={data.animal_type}
            petUrl={data.url}
            breed={data.breed}
            secondary={data.secondary}
            age={data.age}


          removeHandle={this.removeHandle}
          editToggleHandle={this.editToggleHandle}
             />)}
          </div>


    )

    }



    removeHandle=(petObj)=>{
        let newArr= this.state.pets.filter(pet=>pet!=petObj)

        this.setState({
            pets:newArr
        })


        fetch(`http://localhost:3000/deleterehoming/${petObj.id}`,{
            method: "DELETE",
            mode:'cors',
            credentials:'include',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res =>res.json())
          .then((newPets) => this.setState({pets:newArr}))

        console.log(petObj)
        
    } 

    editToggleHandle=(petInfo)=>{
      this.setState({editToggle:true,currentPet:petInfo})
      console.log(petInfo)

    }




render(){
return(
    this.state.editToggle?<EditRehomeForm currentPet={this.state.currentPet}/>:
    <div className='rehome-container'>

      {this.renderRehoming()}

    </div>
)

}

}
export default RehomeView