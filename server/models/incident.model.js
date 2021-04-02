const mongoose = require('mongoose');


const IncidentSchema = new mongoose.Schema({
    incident_location:{
		type:String,
		required: [true,"you need a location in order to proceed"]
	},
	patient_name:{
		type:String,
		required: [true,"patient is required"]
	},
	allergies:{
		type:String,
	},
	medications:{
		type:String
	},
	medications_administered:{
		type:String,
	},
	systolic_bp:{
		type:Number,
		required: [true,"minimum of one set of vitals required"],
		minlength:[1,"please provide accurate reading"]
	},
	diastolic_bp:{
		type:Number,
		required: [true,"minimum of one set of vitals required"],
		minlength:[1,"please provide accurate reading"]
	},
	heart_rate:{
		type:Number,
		required: [true,"minimum of one set of vitals required"],
		minlength:[1,"please provide accurate reading"]
	},
	previous_medical_history:{
		type:String,
	},
	narrative:{
		type:String,
	}
});
module.exports.Incident = mongoose.model('Incident', IncidentSchema)
