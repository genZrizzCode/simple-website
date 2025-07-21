const commands = [
  "simple weather",
  "simple ping",
  "simple Hello",
  "simple help",
  "simple random-int",
  "simple reverse",
  "simple calc",
  "simple cal",
  "simple date",
  "simple cli-stats",
  "simple echo hello world",
  "simple but-better",
  "simple support"
];

const typewriter = document.getElementById('typewriter');
let cmdIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const current = commands[cmdIndex];
  if (typing) {
    if (charIndex < current.length) {
      typewriter.textContent += current[charIndex++];
      setTimeout(typeLoop, 80);
    } else {
      typing = false;
      setTimeout(typeLoop, 3200); // Pause before deleting (now 2s longer)
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = current.substring(0, --charIndex);
      setTimeout(typeLoop, 40);
    } else {
      typing = true;
      cmdIndex = (cmdIndex + 1) % commands.length;
      setTimeout(typeLoop, 400); // Pause before typing next
    }
  }
}

typeLoop();