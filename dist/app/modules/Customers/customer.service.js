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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateCustomer = (customerData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findFirst({
        where: {
            email: customerData.email,
        },
    });
    if (isExist) {
        throw new Error("Customer Already Exist..");
    }
    const result = yield prisma.customer.create({
        data: customerData,
    });
    return result;
});
const GetAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.findMany();
    return result;
});
const GetCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findUnique({
        where: {
            customerId,
        },
    });
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = yield prisma.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
});
const UpdateCustomarById = (customerId, customerData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findUnique({
        where: {
            customerId,
        },
    });
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = yield prisma.customer.update({
        where: {
            customerId,
        },
        data: customerData,
    });
    return result;
});
const DeleteCustomarById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.customer.findUnique({
        where: {
            customerId,
        },
    });
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = yield prisma.customer.delete({
        where: {
            customerId,
        },
    });
    return result;
});
exports.CustomerServices = {
    CreateCustomer,
    GetAllCustomer,
    GetCustomerById,
    UpdateCustomarById,
    DeleteCustomarById
};
