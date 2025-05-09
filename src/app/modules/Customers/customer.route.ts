import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerController.CreateCustomer);
router.get("/", CustomerController.GetAllCustomer);
router.get("/:id", CustomerController.GetCustomerById);
router.put("/:id", CustomerController.UpdateCustomarById);
router.delete("/:id", CustomerController.DeleteCustomarById);

export const CustomerRoute = router;