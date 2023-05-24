import mongoose from "mongoose"


const model = mongoose.Schema({

	journalCode:{
		type:String,
		required:true
	},
	journalType:{
		type:String,
		required:true
	},
	date:{
		type:String,
		required:true
	},
	chartAccountCode:{
		type:String,
		required:true
	},
	companyCode:{
		type:String,
		required:true
	},


	
	

})

const Journal = mongoose.model("journal",model)

export default Journal
