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
    const modalWindow = document.createElement("div");
    modalWindow.className = "modalWindow";
    modalWindow.innerHTML = `<h3 class="modalWindow_text">${text}</h3>`;

    this._parentElement.insertAdjacentElement("afterbegin", modalWindow);

    setTimeout(() => {
      modalWindow.remove();
    }, 4000);
  }
};


export default new ResultsView();
