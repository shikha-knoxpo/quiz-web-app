import axios from "axios";

export const userProfile = async (emailId: string,password:string) => {
  const response = await axios({
    method: "GET",
    url: "",
  });

  return response.data;
};
