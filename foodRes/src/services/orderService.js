import axios from "axios";

export const createOrder = async (order) => {
  const { data } = await axios.post("/api/orders/create", order);
  return data;
};

export const getNewOrderForCurr = async () => {
  const { data } = await axios.get("/api/orders/newOrderForCurrentUser");
  return data;
};
export const pay = async (paymentId) => {
  const { data } = await axios.put("/api/orders/pay", { paymentId });
  return data;
};
export const trackOrderById = async (orderId) => {
  const { data } = await axios.get("/api/orders/track/", { orderId });
  return data;
};
export const getAll = async (state) => {
  const { data } = await axios.get(`/api/orders/${state ?? ""}`);
  return data;
};
export const getAllStatus = async () => {
  const { data } = await axios.get(`/api/orders/allstatus`);
  return data;
};
