// SOLE RESPONSIBILITY IS TO COMMUNICATE WITH THE API
class Api {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
      }

      fetchUsers() {
        return fetch(`${this.baseUrl}/users`).then(res => res.json());
      }
    
      updateUser(id, body) {
        return fetch(`${this.baseUrl}/users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(body),
        }).then(res => res.json());
      }
    
}