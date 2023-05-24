import mongoose from "mongoose"


const model = mongoose.Schema({

	email:{
		type:String,
		required:true
	},
	firstName:{
		type:String,
		required:true
	},
	lastName:{
		type:String,
		required:true
	},
	cin:{
		type:String,
		required:true
	},
	activity:{
		type:String,
		required:true
	},
	phone:{
		type:String,
		required:true
	},
	street:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	country:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	birthday:{
		type:String,
		required:true
	},
	status:{
		type:String,
		required:true
	},
	type:{
		type:String,
		required:true
	}
	

})

const User = mongoose.model("simpleUser",model)

export default User
