export const AJAX = async function (url) {
  try {
    const colorCode = document.querySelector("#colorCode").value;
    const colorSelect = document.querySelector("#colorSelect").value;
    const data = { colorCode, colorSelect };
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
};
