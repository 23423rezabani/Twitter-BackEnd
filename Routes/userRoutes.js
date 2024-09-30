import express from "express";
import pah from "path";

const router = express.Router();

router.get('verify/:userId/:token',verifyEmail);

export default router;