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

  alertWindow() {
    const query = this.getQuery();
    alert(`Sie haben diese Farbe ausgewählt: ${query}`); // oder modal Window
    alert(`Wenn Sie diese Farbe ${query} speichern möchten, drücken Sie bitte auf das "Speichern"`);
  }
};

export default new ResultsView();
