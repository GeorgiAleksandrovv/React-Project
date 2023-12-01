import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/trainers";

export const create = async (trainerData) => {
  const result = await request.post(baseUrl, trainerData);

  return result;
};
