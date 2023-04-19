import View from "./View.js";

import { AJAX } from "../helpers.js";

class ViewController extends View {
  _saveBtn = document.querySelector(".btn__save");

  saveColorDB() {
    this._saveBtn.addEventListener("click", this.getInfo.bind(this));
  }

  getInfo(e) {
    e.preventDefault();
    const baseUrl = "http://127.0.0.1:3030/submit-form";
    AJAX(baseUrl);
    alert(`Sie haben diese Farbe erfolgreich gespeichert`);
  }

  handleEscapeKey() {
    document.addEventListener("keydown", this.closeEscape.bind(this));
  }
};

export default new ViewController();
