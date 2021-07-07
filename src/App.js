import './App.css';
import React, {useState} from 'react'
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
  Redirect,
  useHistory
} from "react-router-dom";
import { NavLink } from 'react-bootstrap';



const App  =()=>{

  const[loggedin,setLoggedin]= useState(false);
  const [thisPageLog,setThisPageLog]=useState(false);

  



function login(user){
  
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
      .then(data=> data.username?loginHandle():null)


      }

      

      function loginHandle(){
        localStorage.setItem("logInToggle",true)
        setLoggedin(true);
        setThisPageLog(true);

     

        
      }
  function logoutHandle(){
    console.log('im working')
    localStorage.setItem("logInToggle",false)
    
  }

      // React.useEffect(()=>{
      //   localStorage.setItem("logInToggle",JSON.stringify(loggedin));


      // });

      React.useEffect(()=>{
        const data= localStorage.getItem("logInToggle");
      
          setLoggedin(JSON.parse(data));

        
       

      });
    


  

    
   function redirectHandle(){
      if(thisPageLog==true){
        return <Redirect to="/adopt"/>
      }
    }

  
  
    return (
  
      <div>
    

      <BrowserRouter>
        {redirectHandle()}

        {loggedin? <Navbar/>:null}
       
     

        {/* <Navbar loggedin={this.state.loggedin}/> */}

    <Switch>
    <Route  exact path='/'>
    <LoginPage getLogIn={login}/>
    </Route>

      <Route  path='/createuser' component={CreateUser}/>
      <Route  path='/favorites' component={FavoritesPage}/>
      <Route  path='/shelters' component={SheltersPage}/>
      <Route  path='/rehome' component={RehomePage}/>
      <Route  path='/pets' component={PetContainer}/>

      <Route  path='/user'>
      <EditUserPage 
      loggedin={loggedin}
      logoutHandle={logoutHandle}
      />
        </Route>

      <Route  path='/mypets' component={RehomeView}/>



      <Route  path='/adopt' >
      <MainPage />
      </Route>





    </Switch>
    
    

    
    </BrowserRouter>
      </div>

);
}


export default App;
