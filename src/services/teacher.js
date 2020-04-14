import baseService from './base';

class TeacherService {
    async getSingleTeacher(id){
        const response = await baseService.get(`/users/${id}`);
        return response.data;
    }
}

const teacherService = new TeacherService();
export default teacherService;