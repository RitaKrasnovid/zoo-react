export default class ApiService {
  _baseUrl = 'http://localhost:8080/api/';

  async getResourse(path) {
    const result = await fetch(`${this._baseUrl}${path}`);

    if(!result.ok) {
      throw new Error('Something wrong');
    }

    return await result.json();
  }

  async postData(path, data = {}) {
    const response = await fetch(`${this._baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });

    return response.json();
  }

  getAllAnimals() {
    return this.getResourse('animals');
  }

  getAllNews() {
    return this.getResourse('news');
  }

  getAnimalsByOrder(order = '') {
    return this.getResourse(`animals/${order}`);
  }

  getAnimalById(id) {
    return this.getResourse(`animals/details/${id}`);
  }

  createNews(body) {
    return this.postData('news', body);
  }
}
