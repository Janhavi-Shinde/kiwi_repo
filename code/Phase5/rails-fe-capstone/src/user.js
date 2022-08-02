class User {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
      User.all.push(this);
    }

    update({ name, email }) {
        this.name = name;
        this.email = email;
      }
  
    renderListItem() {
      return `
      <li>
        <h3>${this.name}
          <button data-id=${this.id}>edit</button>
        </h3>
      </li>`;
    }

    static findById(id) {
        return this.all.find(user => user.id === id )
      }

      renderUpdateForm() {
        return `
        <form data-id=${this.id}>
          <label>Name</label>
          <p>
            <input type="text"  value="${this.name}" />
          </p>
          <label>Email</label>
          <p>
          <textarea>${this.email}</textarea>
          </p>
          <button type='submit'>Update User</button>
        </form>
      `;
      }
  }

  
  
  User.all = [];