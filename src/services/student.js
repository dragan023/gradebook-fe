import baseService from './base';

class StudentService {
  async createStudent(student) {
    const response = await baseService.post('/students', student);
    return response.data;
  }
}

const studentService = new StudentService();
export default studentService;
