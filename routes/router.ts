import { Request, Response, Router } from "express";


const router = Router();

router.get('/mensajes',(req: Request, res:Response)=>{
    // console.log(req.ip)
    res.status(200).json({
        status: true,
        msj: 'GET - TODO LISTO'
    })
})

router.post('/mensajes',(req: Request, res:Response)=>{
    // console.log(req.hostname);
    const {cuerpo, de} = req.body;
    res.status(200).json({
        status: true,
        cuerpo,de,
        msj: 'POST - TODO LISTO'
    })
})

router.post('/mensajes/:id',(req: Request, res:Response)=>{
    // console.log(req.hostname);
    const {cuerpo, de} = req.body;
    const id = req.params.id
    res.status(200).json({
        status: true,
        id,
        cuerpo,de,
        msj: 'POST - TODO LISTO'
    })
})

export default router;