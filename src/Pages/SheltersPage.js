import React from 'react'
import { Link } from "react-router-dom";




class SheltersPage extends React.Component {
    state = {
        zipcode: ''
    }


    componentDidMount() {

        fetch(`http://localhost:3000/me`, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ zipcode: data.zipcode }))


    }




    render() {

        return (

            <div className='google-maps-div'>
                <iframe width="100%"
                    height="1000"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/search?q=pet+adoption+near+${this.state.zipcode}
                 &key=AIzaSyA14q040kfkERZMjuhVOjQ6kXgW1MuyVno
                 &center=29.7604, -95.3698
                 &zoom=11`}

                >
                </iframe>






            </div>


        )

    }
}
export default SheltersPage;