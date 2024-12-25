const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");

const startBtn = document.getElementsById("start-btn");
const stopBtn = document.getElementsById("stop-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", (e) => {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = `Key is down`;
  });
  document.addEventListener("keyup", (e) => {
    logDiv.textContent = `Key ${e.key} pressed Up`;
    stateDiv.textContent = `Key is up`;
  });
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", (e) => {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = `Key is down`;
  });
  document.addEventListener("keyup", (e) => {
    logDiv.textContent = "";
    stateDiv.textContent = " ";
  });
});
