import './App.css';
import React from 'react'
import LoginPage from './Pages/Login/LoginPage'
import CreateUser from './Pages/CreateUser/CreateUser'
import MainPage from './Pages/MainPage'
import FavoritesPage from './Pages/FavoritesPage'
import RehomePage from './Pages/RehomePage'
import SheltersPage from './Pages/SheltersPage'
import Navbar from './Components/Navbar'
import PetContainer from './Components/PetContainer'
import EditUserPage from './Pages/EditUserPage'
import RehomeView from './Pages/RehomeView'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class App extends React.Component{

  state={
    username:'',
    password:'',
    loggedin:false

}


login=(user)=>{
    let postOptions={
        method: "POST",
        mode:'cors',
        credentials:'include',
        headers:{
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(user)

      }
      fetch("http://localhost:3000/login",postOptions)
      .then(res=>res.json())
      .then(data=> data.username?this.setState({loggedin:true}):null)

      console.log(this.state)

      }

    
   redirectHandle(){
      if(this.state.loggedin==true){
        return <Redirect to="/adopt"/>
      }
    }

  
  render () {
    return (
  
      <div>
   

      <BrowserRouter>
        {this.redirectHandle()}

        {/* {this.state.loggedin? <Navbar/>:null} */}

        <Navbar loggedin={this.state.loggedin}/>

    <Switch>
    <Route  exact path='/'>
    <LoginPage getLogIn={this.login}/>
    </Route>

      <Route  path='/createuser' component={CreateUser}/>
      <Route  path='/favorites' component={FavoritesPage}/>
      <Route  path='/shelters' component={SheltersPage}/>
      <Route  path='/rehome' component={RehomePage}/>
      <Route  path='/pets' component={PetContainer}/>
      <Route  path='/user' component={EditUserPage}/>
      <Route  path='/mypets' component={RehomeView}/>



      <Route  path='/adopt' >
      <MainPage />
      </Route>





    </Switch>
    
    

    
    </BrowserRouter>
      </div>

);
}

}
export default App;
