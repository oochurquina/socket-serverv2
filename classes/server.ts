
import express from 'express';
import socketIO, {Server as ServerIO} from 'socket.io';
import { SERVER_PORT, WEB_SERVER } from '../global/environment';

import http from 'http';

export default class Server {
   private static _intance: Server
   public app : express.Application;
   public port: number; 

   public io : socketIO.Server;
   private httpServer: http.Server;
   
   private constructor(){
      this.app  = express();
      this.port = SERVER_PORT;

      this.httpServer = new http.Server(this.app);
      this.io = new socketIO.Server(this.httpServer,{
         // cors: { 
         //    origin: WEB_SERVER, 
         //    methods: [ "GET" , "POST" ] 
         //  } 
      });
      this.escucharSocket();
   }

   public static get instance(){
      return this._intance || (this._intance = new this());
   }

   private escucharSocket(){
      console.log('Escuchando conexiones - sockets.');
      this.io.on('connection', cliente=>{
            console.log('CLIENTE CONECTADO');
      });
   }

   start(callback: any){
      // console.log(callback)
      this.httpServer.listen(this.port, callback);

   }


}