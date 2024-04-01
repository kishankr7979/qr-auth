import express from "express";
import { healthController, grantTokenController, qrGenerator, loginStatusController } from "../controller/index.js";

const router = express.Router();

router.get("/health", healthController);

router.post("/grant/token", grantTokenController);

router.get('/qr', qrGenerator)

router.post('/login/status', loginStatusController);

export default router;