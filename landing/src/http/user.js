import { $host } from "./index";

export const userGetLanding = async () => {
  // получение юзеров
  try {
    const response = await $host.get(`api/landingUser`);
    return response.data;
  } catch (error) {
    console.log("Error get user:", error.response.data.message);
  }
};

export const postUserLanding = async (values) => {
  try {
    await $host.post(`api/landingReg`, {
      name: values.name,
      email: values.email,
    });
  } catch (error) {
    console.log("Error get user:", error.response.data.message);
  }
};
