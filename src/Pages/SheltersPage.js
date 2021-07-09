import React from 'react'
import {Link} from "react-router-dom";




class SheltersPage extends React.Component{





  

    render(){
    
        return(

            <div className='google-maps-div'>
                <iframe width="100%" 
                height="1000"
                style={{ border: 0 }}
                 loading="lazy" 
                 allowFullScreen 
                 src="https://www.google.com/maps/embed/v1/search?q=pet%20shelters
                 &key=AIzaSyA14q040kfkERZMjuhVOjQ6kXgW1MuyVno
                 &center=29.7604, -95.3698
                 &zoom=11"
                 
                 >
                 </iframe>
            </div>


        )

    }
}
export default SheltersPage;