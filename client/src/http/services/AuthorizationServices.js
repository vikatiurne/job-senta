import axios from "axios";
import $api from "../../http/axios";

export default class AuthorizationServices {
  static async registration(email, password, name, lastName) {
    return await $api.post("api/auth/registration", {
      email,
      password,
      name,
      lastName,
    });
  }

  static async login(email, password) {
    return await $api.post("api/auth/login", { email, password });
  }
  static async logout() {
    return $api.post("/api/auth/logout");
  }
  static async autoLogin() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/refresh`, {
      withCredentials: true,
    });
  }

  static async forgotPassword(email) {
    return await $api.put("/api/auth/forgot-password", { email });
  }
  static async resetPassword(newPass, resetLink) {
    return await $api.put("/api/auth/reset-password", { newPass, resetLink });
  }
}
