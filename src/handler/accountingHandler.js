import AccountingEntry from "../model/accountingEntry.js"


export class AccountingHandler{

	getAll(){

		const hdl = (req,res)=>{

			const all = AccountingEntry.find()
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

			const all = AccountingEntry.find().and([{ _id: req.params.id }])
			.then(a => {
				res.status(200).send(a);
	        }).catch(err => {
	            res.status(500).send(err);
	        })
	  	}

	  	return hdl

	}

	getByJournalCode(){

		const hdl = (req,res)=>{

			const all = AccountingEntry.find().and([{ journalCode: req.params.code }])
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

			const all = AccountingEntry.find().and([{ date: req.params.date }])
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
	  		const user = new AccountingEntry(req.body)
			user.save()
			.then(a => {
				res.send({message:"success"})
	        }).catch(err => {
	            res.send({message:"failed"})
	        })
	  	}

	  	return hdl


	}


	update(){

		const hdl = (req,res)=>{
			AccountingEntry.updateOne({_id:req.body.id},{$set:req.body.updates})
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

			AccountingEntry.deleteOne({ _id: req.body.id })

				.then(() => {
					res.send({message:"success"})
		        }).catch(err => {
					res.send({message:"failed"})
		        })
	  	}

	  	return hdl	

	}

}