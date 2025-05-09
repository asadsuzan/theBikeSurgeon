import express from "express";
import { BikeController } from "./bike.controller";

const router = express.Router();

router.post("/", BikeController.CreateBike);
router.get("/", BikeController.GetAllBike);
router.get("/:id", BikeController.GetBikeById);

export const BikeRoute = router;