import express from 'express';

let router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.send("Test page!");
});

router.get("*", (req: express.Request, res: express.Response) => {
    res.status(404).send("These routes have a different 404 page.")
});

export default router;