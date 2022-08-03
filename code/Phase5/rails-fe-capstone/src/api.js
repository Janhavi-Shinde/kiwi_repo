// SOLE RESPONSIBILITY IS TO COMMUNICATE WITH THE API
class Api {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
        this.headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
      }

      fetchUsers() {
        return this.get(`${this.baseUrl}/users`);
      }
    
      updateUser(id, body) {
        return this.patch(`${this.baseUrl}/users/${id}`, body);
      }

      postUsers(body) { 
        return this.post(`${this.baseUrl}/users`, body);
      }
      get(url) {
        return fetch(url).then(res => res.json());
      }
    
      patch(url, body) {
        return fetch(url, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify(body),
        }).then(res => res.json());
      }

      post(url, newUserData) { 
        return fetch(url, {
          method:'POST',
          headers: this.headers,
          body: JSON.stringify(newUserData),
        }).then(res => res.json());
        }
      
}