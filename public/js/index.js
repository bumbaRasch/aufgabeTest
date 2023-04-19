import colorView from "./views/colorView.js";
import resultsView from "./views/resultsView.js";
import viewController from "./views/viewController.js";

const controlInputColor = function () {
  resultsView.changeColor();
  setTimeout(function () {
    resultsView.alertWindow();
  }, 500);
};
const controlSelectColor = function () {
  resultsView.changePicColor();
  setTimeout(function () {
    resultsView.alertWindow();
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

