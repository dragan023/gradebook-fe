import baseService from './base';

class GradebookService {
    async getGradebooks(){
        const response = await baseService.get('/gradebooks');
        return response.data;
    }

    async getSingleGradebook(id){
        const response = await baseService.get(`/gradebooks/${id}`);
        return response.data;
    }

    async createGradebook(gradebook){
        const response = await baseService.post('/gradebooks', gradebook);
        return response.data;
    }
}

const gradebookService = new GradebookService();
export default gradebookService;