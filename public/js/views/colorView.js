import View from "./View.js";

class ColorView extends View {
  _parentEl = document.querySelector(".form");
  _inputEl = document.querySelector(".input__code");
  _selectEl = document.querySelector("#colorSelect");
  _invalidHexMessage = "Ungültige Hex-Farbe. Versuchen Sie noch mal!";
  _invalidStartHexMessage = "Ungültige Hex-Farbe. Farbe muss mit '#' anfangen!";
  _submitUrl = "/submit-form";


  showInvalidHexAlert = (message) => {
    alert(message);
    this.clearInputField();
  };

  handleChangeColor(handler) {
    this._inputEl.addEventListener("input", (e) => {
      e.preventDefault();
      const query = this._inputEl.value;
      if (query[0] !== "#") {
        this.showInvalidHexAlert(this._invalidStartHexMessage);
      }
      if (query.length < 7) return;
      if (this.validateHexColor(query)) {
        handler();
      } else {
        this.showInvalidHexAlert(this._invalidHexMessage);
      }
    });
  }
  
  addHandlerColor = () => {
    this._parentEl.addEventListener("submit", this.getPostData.bind(this));
  };

  getPostData = async function (e) {
    e.preventDefault();

    const formData = new FormData(this._parentEl);

    try {
      await fetch(this._submitUrl, {
        method: "POST",
        body: formData,
      });
      this.clearInputField.bind(this);
    } catch (error) {
      console.error(error);
    }
  };
  validateHexColor = (hex) => {
    const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    return hexRegex.test(hex) && hex.length >= 7;
  };

  validateHexKey() {
    this._inputEl.addEventListener("keydown", (e) => {
      // Filter out non-hexadecimal characters and limit input to 7 characters
      if (
        !(/[0-9A-Fa-f]/.test(e.key) || e.key === "#") ||
        this._inputEl.value.length === 7
      ) {
        e.preventDefault();
      }
    });
  }

  addHandlerSelectColor(handler) {
    this._selectEl.addEventListener("change", (e) => {
      e.preventDefault();
      console.log(e.target.value);
      handler();
    });
  }
}

export default new ColorView();
