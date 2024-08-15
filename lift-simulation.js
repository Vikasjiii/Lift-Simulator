const backButton = document.querySelector(".back-button-container img");
const liftSimulationContainer = document.querySelector(
  ".lift-simulation-container"
);
const floorInput = Number(
  new URLSearchParams(window.location.search).get("floor")
);
const liftInput = Number(
  new URLSearchParams(window.location.search).get("lift")
);

backButton.addEventListener("click", () => {
  history.back();
});

for (let i = 1; i <= floorInput; i++) {
  const aFloor = document.createElement("div");
  aFloor.classList.add("a-floor");
  aFloor.innerHTML = `

              <div class="controls-container">
            <span class="up">Up</span>
            <span class="down">Down</span>
          </div>
          <div class="lift-space">
            <div class="lift">lift</div>

          </div>
          <div class="floor-number">Floor&nbsp;1</div>
    `;
  liftSimulationContainer.appendChild(aFloor);
}
