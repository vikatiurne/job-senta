const ResumeService = require("./resumeService");

class ResumeController {
    async create(req, res, next) {
        const userId = req.user.id;  
        const resumeData = req.body; 

        try {  
            const resume = await ResumeService.createResume(userId, resumeData);  
            return res.status(201).json(resume);  
        } catch (error) {  
            return res.status(400).json({ message: error.message });  
        }  
}
}

module.exports = new ResumeController()