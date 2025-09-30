import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";

import userRouter from "./Routes/user.routes.js";
import authRouter from "./Routes/auth.routes.js";
import subscriptionRouter from "./Routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);



app.get("/", (req, res) => {
  res.send( "Welcome to the subscription tracker API!");
});

app.listen(PORT, async () => {
  console.log(`Subscription tracker is running on http://localhost:${PORT}`);

  await connectToDatabase();

  

});

export default app;
