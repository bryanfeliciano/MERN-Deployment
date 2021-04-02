import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css'

export default props => {
    const [incident, setIncident] = useState({})

    const getIncident = () => {
        axios.get("http://localhost:8000/api/incident/" + props._id)
        .then(response => {
            setIncident(response.data)
            console.log(response)
        })
        .catch(err => console.log("Error:", err))
    }

    useEffect( () => {
        getIncident();
        
    }, [props._id])


    const deleteObject = (_id) => {
        axios.delete(`http://localhost:8000/api/incident/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <div>
            <h5>Patient: {incident.patient_name}</h5>
            <p>Incident location: {incident.incident_location}</p>
            <p>vitals: {incident.systolic_bp} / {incident.diastolic_bp} HR {incident.heart_rate}</p>
            <p>Previous medical history: {incident.previous_medical_history}</p>
            <p>medications: {incident.allergies}</p>
            <p>medications: {incident.medications}</p>
            <p>medications: {incident.medications_administered}</p>
            <p>Narrative: {incident.narrative}</p>
            <button onClick={ e => {deleteObject(incident._id)}} className="btn btn-link align-baseline"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
            </div>
        </div>

    )
}