import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css'

export default () => {
    const [incident_location,setIncidentLocation] = useState("");
    const [patient_name,setPatientName] = useState("");
    const [allergies,setAllergies] = useState("");
    const [medications,setMedications] = useState("");
    const [medications_administered,setMedicationsAdministered] = useState("");
    const [systolic_bp,setSystolicBP] = useState({});
    const [diastolic_bp,setDiastolicBP] = useState({});
    const [heart_rate,setHeartRate] = useState({});
    const [previous_medical_history,setPreviousMedicalHistory] = useState({});
    const [narrative,setNarrative] = useState({});
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/incident`, {
            incident_location,
            patient_name,
            allergies,
            medications,
            medications_administered,
            systolic_bp,
            diastolic_bp,
            heart_rate,
            previous_medical_history,
            narrative
        })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
                console.log(res)
                
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="container">
            <h1>EPCR</h1>
            <h3>create your incident report</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-floating mb-3">
                    <label>Incident location</label>
                    <input type="text" onChange = {e => setIncidentLocation(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.incident_location ? errors.incident_location.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Patient name</label>
                    <input type="text" onChange = {e => setPatientName(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.patient_name ? errors.patient_name.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Allergies</label>
                    <input type="text" onChange = {e => setAllergies(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.allergies ? errors.allergies.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Medications</label>
                    <input type="text" onChange = {e => setMedications(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.medications ? errors.medications.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Medications administered</label>
                    <input type="text" onChange = {e => setMedicationsAdministered(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.medications_administered ? errors.medications_administered.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Systolic bp</label>
                    <input type="text" onChange = {e => setSystolicBP(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.systolic_bp ? errors.systolic_bp.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Diastolic bp</label>
                    <input type="text" onChange = {e => setDiastolicBP(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.diastolic_bp ? errors.diastolic_bp.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label>Heart rate</label>
                    <input type="text" onChange = {e => setHeartRate(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.heart_rate ? errors.heart_rate.message: "" }</span>
                </div>
                <div className="form-floating mb-3">
                    <label htmlFor="floatingTextarea">Previous medical history</label>
                    <textarea className="form-control"  onChange = {e => setPreviousMedicalHistory(e.target.value)} id="floatingTextarea"></textarea>
                </div>
                <div className="form-floating mb-3">
                    <label htmlFor="floatingTextarea">Narrative</label>
                    <textarea className="form-control"  onChange = {e => setNarrative(e.target.value)} id="floatingTextarea"></textarea>
                </div>
                <input type="submit" value="Add Incident" className="btn btn-primary" />
                <button onClick={e => {navigate("/")}} className="btn btn-danger">Cancel</button>
            </form>
        </div>
    );
}
