import axios from "axios";

export const uploadDetails = async (data: any) => {
  try {
    const response = await axios.post(
      "/api/user/savedetails",
      JSON.stringify(data)
    );

    // Check if response is not successful and throw an error
    if (response.status !== 200) {
      throw new Error("Failed to upload details");
    }

    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};
