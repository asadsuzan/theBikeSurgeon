import status from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ServiceDataService } from "./service.service";

const CreateService = catchAsync(async (req, res) => {
  const result = await ServiceDataService.CreateService(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const GetAllService = catchAsync(async (req, res) => {
  const result = await ServiceDataService.GetAllService();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const GetServiceById = catchAsync(async (req, res) => {
  const result = await ServiceDataService.GetServiceById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const UpdateServiceById = catchAsync(async (req, res) => {
  const result = await ServiceDataService.UpdateServiceById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});
const fetchOverdueOrPendingServices = catchAsync(async (req, res) => {
  const result = await ServiceDataService.fetchOverdueOrPendingServices();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServiceDataController = {
  CreateService,
  GetAllService,
  GetServiceById,
  UpdateServiceById,
  fetchOverdueOrPendingServices
};