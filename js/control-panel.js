//CONTROL PANEL
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header-control-panel");
  const history = document.getElementById("history");
  const divhistory = document.getElementById("history-toggle");

  history.addEventListener("click", () => {
    divhistory.classList.toggle("d-none");
  });
});
