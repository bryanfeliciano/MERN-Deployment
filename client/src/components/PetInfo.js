import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


export default props => {
    const [pet, setPet] = useState({})
    // defined it and set state to 0 instead of .count 
    const [likes, setLikes] = useState(0)


    const getPet = () => {
        axios.get("http://localhost:8000/api/pet/" + props._id)
        .then(response => {
            setPet(response.data)
            console.log(response)
        })
        .catch(err => console.log("Error:", err))
    }

    // didnt work
    // const refreshPage = () => {
    //     this.setState(
    //       {reload: true},
    //       () => this.setState({reload: false})
    //     )
    //   }


    useEffect( () => {
        getPet();
        
    }, [props._id])


    const deleteObject = (_id) => {
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    
    const likePet = _id => {

        axios.put("http://localhost:8000/api/like/" + _id, {
            likes
        })
            .then(res => {
                console.log(res)
                getPet();
            })
            .catch(err => console.log(err))
            document.getElementById('button').setAttribute("disabled", "disabled");
    }

    return (
        <div className="container">
            <h3>Details about {pet.name}</h3>
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: 
                <ul>
                    {pet.skill1 ? <li>{pet.skill1}</li> : "" }
                    {pet.skill2 ? <li>{pet.skill2}</li> : "" }
                    {pet.skill3 ? <li>{pet.skill3}</li> : "" }
                </ul>
            </p>
            <p>Likes: {pet.likes}</p>
            <button onClick={ e => {likePet(pet._id)}} id="button">Like this pet</button>
            <button onClick={ e => {deleteObject(pet._id)}} className="btn btn-link align-baseline">Adopt this pet!</button>
        </div>

    )
}