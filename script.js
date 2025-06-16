function showTab(id) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById(id).classList.add('active');
}

function copyScript() {
  const text = document.getElementById("scriptBox").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Script copied!");
  });
}

function copyDiscord() {
  const text = document.getElementById("discordBox").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Discord link copied!");
  });
}

const rainContainer = document.getElementById("rain");
for (let i = 0; i < 120; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.top = Math.random() * -100 + "px";
  drop.style.animationDuration = 3 + Math.random() * 2 + "s";
  drop.style.animationDelay = Math.random() * 5 + "s";
  rainContainer.appendChild(drop);
}

const particleContainer = document.getElementById("particles");
for (let i = 0; i < 80; i++) {
  const dot = document.createElement("div");
  dot.classList.add("particle");
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.top = Math.random() * 100 + "vh";
  dot.style.animationDuration = 2 + Math.random() * 3 + "s";
  dot.style.animationDelay = Math.random() * 4 + "s";
  particleContainer.appendChild(dot);
}
