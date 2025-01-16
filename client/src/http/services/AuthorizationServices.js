import axios from "axios";
import $api from "../../http/axios";

export default class AuthorizationServices {
  static async registration(email, password, username, lastName) {
    return await $api.post("api/auth/registration", {
      email,
      password,
      username,
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
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/api/auth/refresh`,
      {
        withCredentials: true,
      }
    );
  }

  static async forgotPassword(email) {
    try {
      return await $api.put("/api/auth/forgot-password", { email });
      
    } catch (error) {
      if (error instanceof TypeError && error.message === 'NetworkError when attempting to fetch resource.') {  
        throw new Error('NetworkError'); 
      }  
      throw error;  
    }
  }
  static async resetPassword(newPass, resetLink) {
    try {
      
      return await $api.put("/api/auth/recovery-password", { newPass, resetLink });
    } catch (error) {
      return error
    }
  }

  static async socialAuth() {
    return $api.get('/api/oauth/social/user')
  }
  static async checkServerConnection() {
    return $api.get('/api/auth/health')
  }


}
