import { Router } from "express";
import YoutubeRouter from "./youtube";

const routes = Router();

routes.get('/', (request, response) => { 
    return response.json({ 
        status: 'online',
        api: 'MusicAPI',
        version: '0.0.1',
        modes: ['Youtube']
     });
});

routes.use("/youtube", YoutubeRouter);

export default routes;