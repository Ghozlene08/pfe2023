import express from "express"
import User from "../model/user.js"
import {ChartHandler} from "../handler/chartHandler.js"

export class ChartRouter{

  router = express.Router();

  handler = new ChartHandler()

  routes(){

    this.router.get("/find/:id",this.handler.getById())

  	this.router.get("/all",this.handler.getAll())

  	this.router.post("/create",this.handler.create())

  	this.router.post("/update",this.handler.update())

  	this.router.post("/delete",this.handler.delete())

  }


  getRoutes(){
  	this.routes()
  	return this.router
  }

}