export default class ApiAuth {
  _baseUrl = 'http://localhost:8080/api/auth';

  async requestWrapper(path, params) {
    const result = await fetch(`${this._baseUrl}/${path}`, params);

    if(!result.ok) {
      throw new Error('Failed to authenticate user');
    }

    return await result.json();
  }

  login() {
    window.open(`${this._baseUrl}/google`, "_self");
  }

  logout() {
    window.open(`${this._baseUrl}/logout`, "_self");
  }

  loginSuccess() {
    return this.requestWrapper(`login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      }
    });
  }
}
