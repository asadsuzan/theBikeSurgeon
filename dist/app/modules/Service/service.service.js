"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDataService = exports.fetchOverdueOrPendingServices = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../shared/prisma"));
const CreateService = (serviceData) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(serviceData);
    const isBikeExist = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: serviceData.bikeId,
        },
    });
    //   console.log(isBikeExist);
    if (!isBikeExist) {
        throw new Error("Bike Does not exist.");
    }
    const result = yield prisma_1.default.serviceRecord.create({
        data: serviceData,
    });
    return result;
});
const GetAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const GetServiceById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Service Record Not Found.");
    }
    const result = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    return result;
});
const UpdateServiceById = (serviceId, serviceData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Service Not Found.");
    }
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: Object.assign(Object.assign({}, serviceData), { status: client_1.ServiceStatus.done }),
    });
    return result;
});
const fetchOverdueOrPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: [client_1.ServiceStatus.pending, client_1.ServiceStatus.in_progress],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
});
exports.fetchOverdueOrPendingServices = fetchOverdueOrPendingServices;
exports.ServiceDataService = {
    CreateService,
    GetAllService,
    GetServiceById,
    UpdateServiceById,
    fetchOverdueOrPendingServices: exports.fetchOverdueOrPendingServices,
};
