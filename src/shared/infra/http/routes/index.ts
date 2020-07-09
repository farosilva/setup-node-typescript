import { Router } from 'express';

const routes = Router();

/** Rota de teste  */
routes.get('/', (_request, response) => {
  return response.json({
    message: 'Welcome to the project',
  });
});

export default routes;
