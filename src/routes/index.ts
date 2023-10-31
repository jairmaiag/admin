import { Router, Request, Response } from 'express';
const route = Router();
route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Ola mundo com Typescript em rotas' });
});

export default route;