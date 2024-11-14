import $api from '../../http/axios';
import axios from 'axios';

export default class AuthorizationServices {
  static async login(email, password) {
    return await $api.post('api/login', { email, password });
  }
  static async registration(email, password, name, lastName) {
    return await $api.post('api/registration', { email, password, name,lastName });
  }
//   static async logout() {
//     return $api.post('/api/logout');
//   }
//   static async autoLogin() {
//     return await axios.get(`${process.env.REACT_APP_API_URL}api/user/refresh`, {
//       withCredentials: true,
//     });
//   }
  
//   static async forgotPassword(email) {
//     return await $api.put('/api/forgot-password', { email });
//   }
//   static async resetPassword(newPass, resetLink) {
//     return await $api.put('/api/reset-password', { newPass, resetLink });
//   }
//   static async getGoogleRedirectUrl() {
//     return await $api.get('/api/auth/google/url');
//   }
//   static async getGoogleUser() {
//     return await $api.get('/api/auth/me');
//   }
}
