import ChartAccount from "../model/chartAccount.js"


export class ChartHandler{

	getAll(){

		const hdl = (req,res)=>{

			const all = ChartAccount.find()
			.then(a => {
				res.status(200).send(a);
	        }).catch(err => {
	            res.status(500).send(err);
	        })
	  	}

	  	return hdl

	}

	getById(){

		const hdl = (req,res)=>{

			const all = ChartAccount.find().and([{ _id: req.params.id }])
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
			console.log(req.body)
	  		const user = new ChartAccount(req.body)
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
			ChartAccount.updateOne({_id:req.body.id},{$set:req.body.updates})
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

			ChartAccount.deleteOne({ _id: req.body.id })

				.then(() => {
					res.send({message:"success"})
		        }).catch(err => {
					res.send({message:"failed"})
		        })

	  		
	  	}

	  	return hdl	

	}

}