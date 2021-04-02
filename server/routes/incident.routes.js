const IncidentController = require('../controllers/incident.controller');


module.exports = function(app){
    app.post('/api/incident', IncidentController.createIncident);
    app.get('/api/incidents', IncidentController.getAll);
    app.get('/api/incident/:_id', IncidentController.getOne);
    app.put('/api/incident/:_id', IncidentController.updateObject);
    app.delete('/api/incident/:_id', IncidentController.deleteObject);
}
