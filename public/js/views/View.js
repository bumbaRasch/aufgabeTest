export default class View {
  _inputEl = document.querySelector(".input__code");

  getQuery() {
    const query =
      this._inputEl.value || document.querySelector("#colorSelect").value;
    return query;
  }

  
  clearInputField = () => {
    this._inputEl.value = "";
  };
  closeEscape(e) {
    if (e.key === "Escape") {
      this.clearInputField();
    }
  }
};
