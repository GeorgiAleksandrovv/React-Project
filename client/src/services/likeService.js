import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data";

export const like = (userId, trainerId) =>
  request.post(`${baseUrl}/likes`, { userId, trainerId });
export const getTrainerLikes = (trainerId) => {
  const query = encodeURIComponent(`trainerId="${trainerId}"`);

  return request
    .get(`${baseUrl}/likes?select=userId&where=${query}`)
    .then((res) => res.map((x) => x.userId));
};
