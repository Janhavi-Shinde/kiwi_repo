// HERE, WE ATTACH OUR EVENT LISTENERS

class App {

    constructor() {
        this.api = new Api();
      }

    attachEventListeners() {
      document.querySelector('#users-list').addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const user = User.findById(id);

        console.log(user.name);
        
        document.querySelector('#update').innerHTML = user.renderUpdateForm();
      });

      document.querySelector('#update').addEventListener('submit', e => {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const user = User.findById(id);
        const name = e.target.querySelector('input').value;
        const email = e.target.querySelector('textarea').value;
  
        const bodyJSON = { name, email };
        this.api.updateUser(user.id, bodyJSON).then(updatedUser => console.log(updatedUser.name));
    
      });
    }
  }