import status from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BikeServices } from "./bike.service";

const CreateBike = catchAsync(async (req, res) => {
  const result = await BikeServices.CreateBike(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const GetAllBike = catchAsync(async (req, res) => {
  const result = await BikeServices.GetAllBike();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const GetBikeById = catchAsync(async (req, res) => {
  const result = await BikeServices.GetBikeById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const BikeController = {
  CreateBike,
  GetAllBike,
  GetBikeById}