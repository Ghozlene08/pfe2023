import mongoose from "mongoose"


const model = mongoose.Schema({

	journalCode:{
		type:String,
		required:true
	},
	journalLabel:{
		type:String,
		required:true
	},
	date:{
		type:String,
		required:true
	},
	entryCode:{
		type:String,
		required:true
	},
	auxName:{
		type:String,
		required:true
	},
	billNumber:{
		type:String,
		required:true
	},
	accountLabel:{
		type:String,
		required:true
	},
	amount:{
		type:String,
		required:true
	},
	sens:{
		type:String,
		required:true
	},
	
	

})

const AccountingEntry = mongoose.model("accountingEntry",model)

export default AccountingEntry
