const ApiErrors = require("../../errors/ApiErrors");
const goalService = require("./goalService");

class GoalController {
  async create(req, res, next) {
    const userId = req.user.id;
    const { values } = req.body;
    try {
      const goal = await goalService.create(userId, values);
      return res.status(201).json(goal);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async update(req, res, next) {
    const userId = req.user.id;
    const { values } = req.body;
    try {
      const goal = await goalService.update(userId, values);
      return res.status(201).json(goal);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }
  async get(req, res, next) {
      const userId = req.user.id;
    try {
      const goal = await goalService.get(userId);
      return res.status(201).json(goal);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }
  async delete(req, res, next) {
    const userId = req.user.id;
    try {
      const goal = await goalService.delete(userId);
      return res.status(201).json(goal);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }
}

module.exports = new GoalController();
