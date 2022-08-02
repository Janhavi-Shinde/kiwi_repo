class App {
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
        fetch(`http://localhost:3000/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(bodyJSON),
        })
          .then(res => res.json())
          .then(json => console.log(json));
      });
    }
  }