import express from "express";
import Auth from "./Auth";
const router = express.Router();

router.post("/login", Auth.login);
router.post("/signup", Auth.signUp);

export default router;
