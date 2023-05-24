import User from "../model/user.js"
import bcrypt from "bcrypt"


export class UserHandler{

	login(){

		const hdl = async(req,res)=>{
			const all = User.find().and([{ cin: req.body.cin }])
			.then(a => {
				var isValidPassword = bcrypt.compareSync(req.body.password, a[0].password)

				res.status(200).send([{password:isValidPassword},{type:a[0].type}]);
		    }).catch(err => {
		        res.status(500).send(err);
		    })
		}

		return hdl

	}

	getById(){

		const hdl = async(req,res)=>{
			const all = User.find().and([{ _id: req.params.id }])
			.then(a => {
				if(a.length === 1){
					res.status(200).send(a);
				}else{
					res.status(500).send("Bad request");
				}
		    }).catch(err => {
		        res.status(500).send(err);
		    })
		}

		return hdl

	}


	getAll(){

		const hdl = (req,res)=>{

			const all = User.find()
			.then(a => {
				res.status(200).send(a);
	        }).catch(err => {
	            res.status(500).send(err);
	        })
	  	}

	  	return hdl

	}


	create(){

		const hdl = (req,res)=>{

			var newPassword = bcrypt.hashSync(req.body.password, 10)

			req.body.password = newPassword

	  		const user = new User(req.body)
			user.save()
			.then(a => {
				res.send({message:"success"})
	        }).catch(err => {
	        	console.log(err)
	            res.send({message:"failed"})
	        })
	  	}

	  	return hdl


	}


	update(){

		const hdl = (req,res)=>{
			User.updateOne({_id:req.body.id},{$set:req.body.updates})
			.then(() => {
				res.send({message:"success"})
	        }).catch(err => {
	            res.send({message:"failed"})
	        })
	  	}

	  	return hdl

	}


	delete(){

		const hdl = async (req,res)=>{

			User.deleteOne({ _id: req.body.id })

				.then(() => {
					res.send({message:"success"})
		        }).catch(err => {
					res.send({message:"failed"})
		        })

	  		
	  	}

	  	return hdl	

	}

}