import axios from "axios";

export const uploadDetails = async (data: any) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/user/savedetails",
      JSON.stringify(data)
    );
    console.log(response.data);
    console.log("added to db");
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};
