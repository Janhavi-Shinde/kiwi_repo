// HERE, WE ATTACH OUR EVENT LISTENERS

class App {

    constructor() {
        this.api = new Api();

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.createUsers = this.createUsers.bind(this);
        this.addUsers = this.addUsers.bind(this);
  }
      

    attachEventListeners() {
             document.querySelector('#users-list').addEventListener('click', this.handleEditClick);
         document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
    }

         // notice the previous functionality is broken up
        // into two different methods for future re-use...
        createUsers(users) {
            users.forEach(user => {
            new User(user);
            });
            this.addUsers();
        }
        
        addUsers() {
            document.querySelector('#users-list').innerHTML = '';
            User.all.forEach(
              user => (document.querySelector('#users-list').innerHTML += user.renderListItem())
            );
          }

          handleFormSubmit(e) {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const user = User.findById(id);
            const name = e.target.querySelector('input').value;
            const email = e.target.querySelector('textarea').value;
        
            const bodyJSON = { name, email };
            this.api.updateUser(user.id, bodyJSON).then(updatedUser => console.log(updatedUser.name));
          }

          handleEditClick(e) {
            const id = parseInt(e.target.dataset.id);
            const user = User.findById(id);
            document.querySelector('#update').innerHTML = user.renderUpdateForm();
          }
          
        }




//EXPLANATION OF ABSTRACTION

//           //This was abstracted in attachEventListeners
//       document.querySelector('#users-list').addEventListener('click', e => {
//         //This was abstracted in the event handler handleEditClick
//         const id = parseInt(e.target.dataset.id);
//         const user = User.findById(id);
//         console.log(user.name);
//         document.querySelector('#update').innerHTML = user.renderUpdateForm();
//       });

//       //This was act of attaching this eventlistener was abstracted at the top by the fnction attachEventListeners
//       document.querySelector('#update').addEventListener('submit', e => {
//         //This is not abstracted into the handleFormSUbmit event handler
//         e.preventDefault();
//         const id = parseInt(e.target.dataset.id);
//         const user = User.findById(id);
//         const name = e.target.querySelector('input').value;
//         const email = e.target.querySelector('textarea').value;
  
//         const bodyJSON = { name, email };
//         this.api.updateUser(user.id, bodyJSON).then(updatedUser => console.log(updatedUser.name));
    
//       });
//     }
//   }