import axios from "axios";

const API_URL = "http://localhost:5000/payment"; // Adjust to your backend URL in production

export const sendInvoice = async ({ email, planName, orderId, paymentId, purchasedOn }) => {
  try {
    const response = await axios.post(`${API_URL}/send-invoice`, {
      email,
      planName,
      orderId,
      paymentId,
      purchasedOn,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending invoice:", error);
    throw error;
  }
};
