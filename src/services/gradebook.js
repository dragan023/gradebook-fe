import baseService from './base';

class GradebookService {
  async getGradebooks() {
    const response = await baseService.get('/gradebooks');
    return response.data;
  }

  async getSingleGradebook(id) {
    const response = await baseService.get(`/gradebooks/${id}`);
    return response.data;
  }

  async createGradebook(gradebook) {
    const response = await baseService.post('/gradebooks', gradebook);
    return response.data;
  }

  async deleteGradebook(gradebookId) {
    const response = await baseService.delete(`/gradebooks/${gradebookId}`);
    return response.data;
  }

  async createComment(comment) {
    const response = await baseService.post('/comments', comment);
    return response.data;
  }
}

const gradebookService = new GradebookService();
export default gradebookService;
