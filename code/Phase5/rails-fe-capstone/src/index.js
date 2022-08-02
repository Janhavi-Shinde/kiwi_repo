document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/users';
    fetch(endPoint)
      .then(res => res.json())
      .then(json =>
        json.forEach(user => {
          const data = `
          <li>
            <h3>${user.name}
                <p>${user.email}</p>
              <button>edit</button>
            </h3>
          </li>`;
  
          document.querySelector('#users-list').innerHTML += data;
        })
      );
  });