import express from "express";
import { subIndex, sumIndex } from "./index.controller";

const router = express.Router();

router.route("/add").post(sumIndex);
router.route("/sub").post(subIndex);


export default router;