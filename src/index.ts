import express from "express";
import * as dotenv from "dotenv";
// Routes
import root from "./routes/root";
import test from "./routes/test";

dotenv.config();

let port: String | undefined = process.env.EXPRESS_PORT;

if (port === undefined) {
    console.error("EXPRESS_PORT is not defined in .env file.");
    process.exit(1);
}

let app: express.Application = express();

app.use("/", root);
app.use("/test", test);

app.get("*", (req: express.Request, res: express.Response) => {
    res.status(404).send("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});