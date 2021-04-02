const { Incident } = require('../models/incident.model');

module.exports.createIncident = (req, res) => {
    const {incident_location,patient_name,allergies,medications,medications_administered,systolic_bp,diastolic_bp,heart_rate,previous_medical_history,narrative} = req.body;
    Incident.create({
        incident_location,
        // incident,
        patient_name,
        allergies,
        medications,
        medications_administered,
        systolic_bp,
        diastolic_bp,
        heart_rate,
        // gcs,
        previous_medical_history,
        narrative
    })
    .then(incident => res.json(incident))
    .catch(err => res.json(err));
}

module.exports.getAll = (request, response) => {
    Incident.find({}).sort("type").exec()
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Incident.findOne({ _id: request.params._id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updateObject = (request, response) => {
    Incident.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators: true})
        .then( () => response.json({msg: "success"}))
        .catch(err => response.json(err));
}

module.exports.deleteObject = (request, response) => {
    Incident.deleteOne({_id: request.params._id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
// generic controllers
