"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    // console.log(req.ip)
    res.status(200).json({
        status: true,
        msj: 'GET - TODO LISTO'
    });
});
router.post('/mensajes', (req, res) => {
    // console.log(req.hostname);
    const { cuerpo, de } = req.body;
    res.status(200).json({
        status: true,
        cuerpo, de,
        msj: 'POST - TODO LISTO'
    });
});
router.post('/mensajes/:id', (req, res) => {
    // console.log(req.hostname);
    const { cuerpo, de } = req.body;
    const id = req.params.id;
    res.status(200).json({
        status: true,
        id,
        cuerpo, de,
        msj: 'POST - TODO LISTO'
    });
});
exports.default = router;
