import colorView from "./views/colorView.js";
import resultsView from "./views/resultsView.js";
import viewController from "./views/viewController.js";

const controlInputColor = function () {
  resultsView.changeColor();
  setTimeout(function () {

    resultsView.alertWindow('test 1');
  }, 500);
};
const controlSelectColor = function () {
  const colorSelect = document.querySelector("#colorSelect").value;
  resultsView.changePicColor();
  setTimeout(function () {
    resultsView.alertWindow(`Sie haben diese Farbe ausgewählt: ${colorSelect}`);
  }, 500);
};


const init = () => {
  colorView.handleChangeColor(controlInputColor);
  colorView.addHandlerSelectColor(controlSelectColor);
  colorView.addHandlerColor();
  viewController.saveColorDB();
  viewController.handleEscapeKey();
};

init();

