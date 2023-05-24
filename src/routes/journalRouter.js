import express from "express"
import User from "../model/user.js"
import {JournalHandler} from "../handler/journal.js"

export class JournalRouter{

  router = express.Router();

  handler = new JournalHandler()

  routes(){

  	this.router.get("/all",this.handler.getAll())

    this.router.get("/find/:id",this.handler.getById())

    this.router.get("/search-date/:date",this.handler.getByDate())

    this.router.get("/search-type/:type",this.handler.getByType())

  	this.router.post("/create",this.handler.create())

  	this.router.post("/update",this.handler.update())

  	this.router.post("/delete",this.handler.delete())

  }


  getRoutes(){
  	this.routes()
  	return this.router
  }

}