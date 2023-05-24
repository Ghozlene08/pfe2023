import mongoose from "mongoose"


const model = mongoose.Schema({

	class:{
		type:String,
		required:true
	},
	classLabel:{
		type:String,
		required:true
	},
	chartCode:{
		type:String,
		required:true
	},
	chartLabel:{
		type:String,
		required:true
	},
	
	

})

const ChartAccount = mongoose.model("chartAccount",model)

export default ChartAccount
