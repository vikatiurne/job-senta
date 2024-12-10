const { Resume } = require("../../models/models");

class ResumeService {
    async create(userId, resumeData) {
        try {  
            const resume = await Resume.create({resumeData, userId});  

            if (resumeData.contact) {  
                const contact = await Contact.create({ ...resumeData.contact });  
                await resume.setContact(contact);  
            }  

            if (resumeData.projects) {  
                await Promise.all(resumeData.projects.map(async (project) => {  
                    const newProject = await Project.create({ ...project });  
                    await resume.addProject(newProject);  
                }));  
            }  

            // Повторяйте для остальных связанных данных (Work, Education и т. д.)  

            return resume; // Возвращает созданное резюме  
        } catch (error) {  
            throw new Error('Error creating resume: ' + error.message);  
        }  
}
}

module.exports = new ResumeService()