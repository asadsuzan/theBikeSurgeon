import express from "express";
import { BikeRoute } from "../modules/Bike/bike.route";
import { CustomerRoute } from "../modules/Customers/customer.route";

const router = express.Router();

const moduleRoutes = [

  {
    path: "/customers",
    route: CustomerRoute,
  },
  
  {
    path: "/bikes",
    route: BikeRoute,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;