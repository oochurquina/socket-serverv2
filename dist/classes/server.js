"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const environment_1 = require("../global/environment");
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.default.Server(this.httpServer, {
        // cors: { 
        //    origin: WEB_SERVER, 
        //    methods: [ "GET" , "POST" ] 
        //  } 
        });
        this.escucharSocket();
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    escucharSocket() {
        console.log('Escuchando conexiones - sockets.');
        this.io.on('connection', cliente => {
            console.log('CLIENTE CONECTADO');
        });
    }
    start(callback) {
        // console.log(callback)
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
