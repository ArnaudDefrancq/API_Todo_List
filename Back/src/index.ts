import express, {Request, Response} from "express";
import dotenv from "dotenv";
import todoRouter from "./Routes/todoRouter";

dotenv.config();

const PORT = process.env.PORT_SERVER || 3000;
const app = express();

app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//     res.send("Hello World !");
// });

app.use('/todo', todoRouter);

app.listen(PORT, () => {
    console.log(`Server run http://localhost:${PORT}`);
});