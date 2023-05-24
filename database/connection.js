import mongoose from "mongoose"


export class ConnectionDB{

	connect(uri){
		const con = mongoose.connect(uri,{
			dbName:"mydb",
		    useNewUrlParser: true,
		    useUnifiedTopology: true
		}).then(()=>{
			console.log("connected mongodb")
		}).catch(err=>{
			console.log(err)
		})
	}

}