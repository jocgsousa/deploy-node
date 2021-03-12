import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) =>{
    return response.json({messege:'Hello Teste...'})
});

export default routes;