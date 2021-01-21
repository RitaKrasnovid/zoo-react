export default class ApiService {
  _baseUrl = 'http://localhost:8080/api/';

  async getResourse(path) {
    const result = await fetch(`${this._baseUrl}${path}`);

    if(!result.ok) {
      throw new Error('Something wrong');
    }

    return await result.json();
  }

  getAllAnimals() {
    return this.getResourse('animals');
  }

  getAllNews() {
    return this.getResourse('news');
  }

  getCurrentNews(limit = 3) {
    return this.getResourse(`news/${limit}`);
  }

  getAnimalsByOrder(order = '') {
    return this.getResourse(`animals/${order}`);
  }

  getAnimalById(id) {
    return this.getResourse(`animals/details/${id}`);
  }
}
