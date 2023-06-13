import View from "./View.js";
import ResultsView from "./resultsView.js";
import { AJAX } from "../helpers.js";

class ViewController extends View {
  _saveBtn = document.querySelector(".btn__save");
  _parentElement = document.querySelector("body");

  saveColorDB() {
    this._saveBtn.addEventListener("click", this.getInfo.bind(this));
  }

  getInfo(e) {
    e.preventDefault();
    const baseUrl = location.href + "submit-form";
    AJAX(baseUrl);
    ResultsView.alertWindow("Ihre Farbe war erfolgreich gespeichert");
    //alert(`Sie haben diese Farbe erfolgreich gespeichert`);
  }

  handleEscapeKey() {
    document.addEventListener("keydown", this.closeEscape.bind(this));
  }

};

export default new ViewController();
