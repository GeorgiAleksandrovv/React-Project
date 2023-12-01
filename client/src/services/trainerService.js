import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/trainers";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const create = async (trainerData) => {
  const result = await request.post(baseUrl, trainerData);

  return result;
};

export const getOne = async (trainerId) => {
  const result = await request.get(`${baseUrl}/${trainerId}`);

  return result;
};

export const edit = async (trainerId, trainerData) => {
  const result = await request.put(`${baseUrl}/${trainerId}`, trainerData);

  return result;
};

export const remove = async (trainerId) =>
  request.remove(`${baseUrl}/${trainerId}`);
