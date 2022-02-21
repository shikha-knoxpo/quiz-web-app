import axios from "axios";

export const userProfile = async (emailId: string, password: string) => {
  const response = await axios({
    method: "GET",
    url: "www.abc.com",
  });

  return response.data;
};
