fetch('../cmds.json')
  .then(response => response.json())
  .then(cmds => {
    const cmdsDiv = document.getElementById('cmds');
    for (const [command, description] of Object.entries(cmds)) {
      const cmdP = document.createElement('p');
      cmdP.textContent = `simple ${command}`;
      cmdP.style.fontWeight = 'bold';
      cmdP.style.marginBottom = '0.2em';
      cmdP.style.fontFamily = "'Ubuntu Mono', monospace";

      const descP = document.createElement('p');
      descP.textContent = description;
      descP.style.marginTop = '0';
      descP.style.marginBottom = '1.2em';
      descP.style.fontFamily = "'Lexend', Arial, sans-serif";
      descP.style.fontWeight = 'normal';

      cmdsDiv.appendChild(cmdP);
      cmdsDiv.appendChild(descP);
    }
  })
  .catch(err => {
    document.getElementById('cmds').textContent = 'Failed to load commands.';
    console.error(err);
  });

// Collapse/expand logic for the whole list
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggle-cmds');
  const arrow = document.getElementById('arrow');
  const cmdsDiv = document.getElementById('cmds');
  let expanded = true;

  // Start collapsed
  cmdsDiv.style.display = 'none';
  arrow.textContent = '▼';
  expanded = false;

  toggle.onclick = function() {
    expanded = !expanded;
    cmdsDiv.style.display = expanded ? 'block' : 'none';
    arrow.textContent = expanded ? '▲' : '▼';
  };
});
