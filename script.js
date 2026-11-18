
function goTo(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

function respond(choice) {
  const messages = {
    talk: "I'd like that. I'll listen without interrupting or making excuses. Let's understand each other. ❤️",

    time: "Of course. Take all the time you need. I respect your space, and there's no pressure to reply. 🌷",

    forgive: "Thank you. I appreciate that. Let's move forward with understanding and genuine effort. ❤️"
  };

  const response = document.getElementById("response");
  const responseText = document.getElementById("responseText");

  responseText.textContent =
    messages[choice] || "Take your time. Your feelings matter. ❤️";

  response.classList.add("visible");

  response.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

// Floating heart particles
const particleArea = document.getElementById("particles");

for (let i = 0; i < 22; i++) {
  const heart = document.createElement("span");

  heart.className = "particle";
  heart.textContent = "♥";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = Math.random() * 12 + "s";
  heart.style.animationDuration =
    (9 + Math.random() * 10) + "s";

  heart.style.fontSize =
    (9 + Math.random() * 13) + "px";

  particleArea.appendChild(heart);
}
