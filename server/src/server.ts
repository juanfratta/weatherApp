import express, { Application } from 'express';
import { Server } from '@overnightjs/core';
import cors from 'cors';


export class ServerApp extends Server {
  private readonly STARTED_MSG = 'server is running on port: ';

  constructor() {
    super(true);
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(cors())
    this.setupControllers()
  }

  private setupControllers(): void {
    //initialize controllers here

      super.addControllers([/* add controllers here */]);

  }

  public getApp(): Application {
    return this.app
  }

  public start (port:number){
    if(process.env.NODE_ENV !== 'test'){
        this.app.listen(port, ()=>{
            console.log(this.STARTED_MSG + port)
        })
    }
  }

}
