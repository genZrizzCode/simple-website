const commands = [
  " weather",
  " ping",
  " Hello",
  " help",
  " random-int",
  " reverse",
  " calc",
  " cal",
  " date",
  " cli-stats",
  " echo hello world",
  " but-better",
  " support"
];

const staticPart = "simple";
const typewriterText = document.getElementById('typewriter-text');
let cmdIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const current = commands[cmdIndex];
  typewriterText.textContent = staticPart + current.substring(0, charIndex);

  if (typing) {
    if (charIndex < current.length) {
      charIndex++;
      setTimeout(typeLoop, 80);
    } else {
      typing = false;
      setTimeout(typeLoop, 3200); // Pause before deleting
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 40);
    } else {
      typing = true;
      cmdIndex = (cmdIndex + 1) % commands.length;
      setTimeout(typeLoop, 400); // Pause before typing next
    }
  }
}

typeLoop();