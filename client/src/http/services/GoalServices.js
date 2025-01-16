import $api from "../axios";

export default class GoalServices {
  static async createGoal(values) {
    return await $api.post("api/goal/create", { values });
  }

  static async getGoal() {
    return await $api.get("api/goal/get");
  }

  static async updateGoal(values) {
    return await $api.put("api/goal/update", { values });
  }
  static async deleteGoal() {
    return await $api.delete("api/goal/delete");
  }
}
