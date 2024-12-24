import axios from "axios";
import { baseURL } from "./index.js";

export const sendInvoice = async (invoiceData) => {
  const response = await axios.post(`${baseURL}/payment/send-invoice`, invoiceData);

  return response.data;
};

  