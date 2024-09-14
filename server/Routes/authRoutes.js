import express from "express";
import autController from "../controller/authController";


const router = express.Router();

router.post('/register',autController.register)

