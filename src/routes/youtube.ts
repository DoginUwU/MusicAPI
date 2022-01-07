import { Router } from "express";
import { loadVideosURL, search } from "../services/youtube";

const routes = Router();

routes.get("/search", async (request, response) => {
    const { query } = request.query;

    const results = await search(query as string);

    return response.json(await loadVideosURL(results));
});

export default routes;
