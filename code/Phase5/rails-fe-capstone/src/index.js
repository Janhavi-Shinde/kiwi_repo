document.addEventListener('DOMContentLoaded', () => {

  const app = new App();
  app.attachEventListeners();

  app.api.fetchUsers().then(json => {
    json.forEach(user => {
      document.querySelector('#users-list').innerHTML += new User(user).renderListItem();
    });
  });
});

  //   const endPoint = 'http://localhost:3000/users';
  //   fetch(endPoint)
  //     .then(res => res.json())
  //     .then(json =>
  //       json.forEach(user => {
  //         const newUser = new User(user);
  
  //         document.querySelector('#users-list').innerHTML += newUser.renderListItem();
  //       })
  //     );
  // });