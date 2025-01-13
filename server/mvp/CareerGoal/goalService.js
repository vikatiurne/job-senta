const { CareerGoal } = require("../../models/models");

class GoalService {
  async create(userId, goalData) {
    const goal = await CareerGoal.create({
      target: goalData.title,
      date: goalData.date,
      salary: goalData.salary,
      userId,
    });
    return goal;
  }

  async get(userId) {
    const goal = await CareerGoal.findOne({ where: { userId: userId } });
    return goal;
  }

  async update(userId, goalData) {
    await CareerGoal.update(
      {
        target: goalData?.title,
        date: goalData?.date,
        salary: goalData?.salary,
      },
      { where: { userId: userId } }
    );
    return await this.get(userId);
  }

  async delete(userId) {
    await CareerGoal.destroy({ where: { userId: userId } });
    return {};
  }
}

module.exports = new GoalService();
