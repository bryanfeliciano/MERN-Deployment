const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pet/:_id', PetController.getOne);
    app.put('/api/pet/:_id', PetController.updateObject);
    app.delete('/api/pet/:_id', PetController.deleteObject);
    app.put('/api/like/:_id', PetController.likePet)
}
// keep the routes simple, taken from product manager,remember to cntrl f .
// like route? .count? maybe do a setstate to a count of zero,look trough npm to see if theres anything