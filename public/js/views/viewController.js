import View from "./View.js";

import { AJAX } from "../helpers.js";

class ViewController extends View {
  _saveBtn = document.querySelector(".btn__save");

  saveColorDB() {
    this._saveBtn.addEventListener("click", this.getInfo.bind(this));
  }

  getInfo(e) {
    e.preventDefault();
    const baseUrl = location.href + "submit-form";
    AJAX(baseUrl);
    this.alertWindow2();
    //alert(`Sie haben diese Farbe erfolgreich gespeichert`);
  }

  handleEscapeKey() {
    document.addEventListener("keydown", this.closeEscape.bind(this));
  }

 alertWindow2() {
  const query = "Der ausgewählte Farbton wurde erfolgreich gespeichert.";
  const modalWindowText = document.querySelector(".modalWindow_text");
  const modalWindow = document.querySelector(".modalWindow");
  modalWindowText.textContent = query;
  modalWindow.style.display = "block";
}

  
};

export default new ViewController();
