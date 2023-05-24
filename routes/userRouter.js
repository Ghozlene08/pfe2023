import express from "express"
import User from "../model/user.js"
import {UserHandler} from "../handler/user.js"

export class UserRouter{

  router = express.Router();

  handler = new UserHandler()

  routes(){

  	this.router.post("/login",this.handler.login())

    this.router.get("/get/:id",this.handler.getById())

  	this.router.get("/all",this.handler.getAll())

  	this.router.post("/register",this.handler.create())

  	this.router.post("/update",this.handler.update())

  	this.router.post("/delete",this.handler.delete())

  }


  getRoutes(){
  	this.routes()
  	return this.router
  }

}