import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector("body");

  changeColor() {
    this._parentElement.style.backgroundColor =
      document.querySelector(".input__code").value;
  }
  changePicColor() {
    this._parentElement.style.backgroundColor =
      document.querySelector("#colorSelect").value;
  }

  alertWindow(text) {

// Sie haben diese Farbe ausgewählt: ${query}


    //const query = this.getQuery();
    const modalWindowHtml = `
      <div class="modalWindow">
        <h3 class="modalWindow_text">${text}</h3>
      </div>`;

    this._parentElement.insertAdjacentHTML('afterbegin', modalWindowHtml);
    setTimeout(() => {
    const modalWindow = document.querySelector('.modalWindow');
    if (modalWindow) {
      modalWindow.remove();
    }
  }, 8000);
    
  }
};


export default new ResultsView();
