import baseService from './base';

class TeacherService {
    async getSingleTeacher(id){
        const response = await baseService.get(`/users/${id}`);
        return response.data;
    }

    async getTeachers(){
        const response = await baseService.get(`/users`);
        return response.data;
    }
}

const teacherService = new TeacherService();
export default teacherService;