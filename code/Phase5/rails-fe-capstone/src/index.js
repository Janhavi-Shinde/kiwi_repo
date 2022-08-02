document.addEventListener('DOMContentLoaded', () => {

  const app = new App();
  app.attachEventListeners();

  app.api.fetchUsers().then(app.createUsers);
});

//   app.api.fetchUsers().then(json => {
//     json.forEach(user => {
//       document.querySelector('#users-list').innerHTML += new User(user).renderListItem();
//     });
//   });
// }); 