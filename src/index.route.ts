import express from "express";
import { sumIndex } from "./index.controller";

const router = express.Router();

router.route("/add").post(sumIndex);


export default router;