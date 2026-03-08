// import express from "express";
// import dotenv from "dotenv";
// import notesRoutes from "./routes/notesRoutes.js";
// import {connectDB} from "./config/db.js";
// import rateLimiter from "./middleware/rateLimiter.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8080;

// connectDB();

// app.use(express.json()); //middleware that parses the JSON bodies
// // app.use((req, res, next) => {
// //     console.log(`REQ METHOD: ${req.method} & REQ URL: ${req.url}`)
// //     next();
// // }) //Custom middleware
// app.use(rateLimiter);
// app.use("/api/notes", notesRoutes);

// app.listen(PORT, () => {
//     console.log("SERVER LISTENING ON PORT:", PORT)
// })


//Package imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


//Components imports
import router from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(rateLimiter);
app.use("/api/notes", router);

connectDB().then(()=> {app.listen(PORT || 8080, ()=> {
    console.log("SERVER LISTENING ON PORT: ", PORT)
})})