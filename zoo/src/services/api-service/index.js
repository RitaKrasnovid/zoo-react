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
}
