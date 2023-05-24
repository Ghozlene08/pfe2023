import express from "express"
import User from "../model/user.js"
import {AccountingHandler} from "../handler/accountingHandler.js"

export class AccountingRouter{

  router = express.Router();

  handler = new AccountingHandler()

  routes(){

  	this.router.get("/all",this.handler.getAll())

    this.router.get("/find/:code",this.handler.getByJournalCode())

    this.router.get("/search/:date",this.handler.getByDate())

    this.router.get("/get/:id",this.handler.getById())

  	this.router.post("/create",this.handler.create())

  	this.router.post("/update",this.handler.update())

  	this.router.post("/delete",this.handler.delete())

  }


  getRoutes(){
  	this.routes()
  	return this.router
  }

}