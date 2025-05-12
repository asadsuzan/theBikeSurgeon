"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.ServiceDataController.CreateService);
router.get("/status", service_controller_1.ServiceDataController.fetchOverdueOrPendingServices);
router.get("/", service_controller_1.ServiceDataController.GetAllService);
router.get("/:id", service_controller_1.ServiceDataController.GetServiceById);
router.put("/:id/complete", service_controller_1.ServiceDataController.UpdateServiceById);
exports.ServiceRoute = router;
