import status from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CustomerServices } from "./customer.service";

const CreateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.CreateCustomer(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});
const GetAllCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetAllCustomer();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});
const GetCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});
const UpdateCustomarById = catchAsync(async (req, res) => {
  const result = await CustomerServices.UpdateCustomarById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});
const DeleteCustomarById = catchAsync(async (req, res) => {
  const result = await CustomerServices.DeleteCustomarById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully",
    data: result,
  });
});

export const CustomerController = {
  CreateCustomer,
  GetAllCustomer,
  GetCustomerById,
  UpdateCustomarById,
  DeleteCustomarById
};