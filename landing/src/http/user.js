import { $host } from "./index";

export const userGetLanding = async () => {
  // получение юзеров
  try {
    const response = await $host.get(`api/landingUser`);
    return response.data;
  } catch (error) {
      console.log("Error get user:", error.response.data.message);

    // throw error;
  }
};

export const postUserLanding = async (values) => {
  try {
    const response = await $host.post(`api/landingReg`, {
      name: values.name,
      email: values.email,
    });
    // return response;
  } catch (error) {
    console.log("Error get user:", error.response.data.message);
    // throw error;
  }
};
