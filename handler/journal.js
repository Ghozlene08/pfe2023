import Journal from "../model/journal.js"


export class JournalHandler{

	getAll(){

		const hdl = (req,res)=>{

			const all = Journal.find()
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

			const all = Journal.find().and([{ _id: req.params.id }])
			.then(a => {
				res.status(200).send(a);
	        }).catch(err => {
	            res.status(500).send(err);
	        })
	  	}

	  	return hdl

	}


	getByType(){

		const hdl = (req,res)=>{

			const all = Journal.find().and([{ journalType: req.params.type }])
			.then(a => {
				res.status(200).send(a);
	        }).catch(err => {
	            res.status(500).send(err);
	        })
	  	}

	  	return hdl

	}

	getByDate(){

		const hdl = (req,res)=>{

			const all = Journal.find().and([{ date: req.params.date }])
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
	  		const user = new Journal(req.body)
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
			Journal.updateOne({_id:req.body.id},{$set:req.body.updates})
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

			Journal.deleteOne({ _id: req.body.id })

				.then(() => {
					res.send({message:"success"})
		        }).catch(err => {
					res.send({message:"failed"})
		        })
	  	}

	  	return hdl	

	}

}