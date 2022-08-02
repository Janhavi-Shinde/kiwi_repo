class App {
    attachEventListeners() {
      document.querySelector('#users-list').addEventListener('click', e => {
        console.log('clicked');
      });
    }
  }