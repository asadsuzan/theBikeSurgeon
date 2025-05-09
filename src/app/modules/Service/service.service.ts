enum ServiceStatus {
  pending = "pending",
  in_progress = "in_progress",
  done = "done",
}

interface ServiceRecord {
  serviceId: string;
  bikeId: string;
  serviceDate: Date;
  status: ServiceStatus;
  [key: string]: any; // Add other fields as per your schema
}
import prisma from "../../shared/prisma";

const CreateService = async (serviceData: ServiceRecord) => {
  //   console.log(serviceData);

  const isBikeExist = await prisma.bike.findUnique({
    where: {
      bikeId: serviceData.bikeId,
    },
  });

  //   console.log(isBikeExist);

  if (!isBikeExist) {
    throw new Error("Bike Does not exist.");
  }

  const result = await prisma.serviceRecord.create({
    data: serviceData,
  });

  return result;
};

const GetAllService = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const GetServiceById = async (serviceId: string) => {
  const isExist = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Service Record Not Found.");
  }
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  return result;
};

const UpdateServiceById = async (
  serviceId: string,
  serviceData: Partial<ServiceRecord>
): Promise<ServiceRecord> => {
  const isExist = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Service Not Found.");
  }

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      ...serviceData,
      status: ServiceStatus.done,
    },
  });

  return result;
};

export const fetchOverdueOrPendingServices = async () => {
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: [ServiceStatus.pending, ServiceStatus.in_progress],
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
};

export const ServiceDataService = {
  CreateService,
  GetAllService,
  GetServiceById,
  UpdateServiceById,
  fetchOverdueOrPendingServices,
};