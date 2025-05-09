import express from "express";
import { BikeRoute } from "../modules/Bike/bike.route";

const router = express.Router();

const moduleRoutes = [

  {
    path: "/bikes",
    route: BikeRoute,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;