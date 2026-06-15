import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// import routes :
import authRoutes from "./modules/auth/auth.controller.js"
import simRoutes from "./modules/sims/sim.controller.js"
import usageRoutes from "./modules/usage/usage.controller.js"
import billingRoutes from "./modules/billing/billing.controller.js"


dotenv.config();
connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sims", simRoutes);
app.use("/api/usage", usageRoutes);
app.use("/api/billing", billingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);;
});

export default app;