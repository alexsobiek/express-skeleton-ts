import express from 'express';

let router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

export default router;