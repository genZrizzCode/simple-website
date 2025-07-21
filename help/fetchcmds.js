fetch('../cmds.json')
  .then(response => response.json())
  .then(cmds => {
    const cmdsDiv = document.getElementById('cmds');
    for (const [command, description] of Object.entries(cmds)) {
      // Create container for each command/description pair
      const container = document.createElement('div');
      container.style.marginBottom = '1em';

      // Create the arrow indicator
      const arrow = document.createElement('span');
      arrow.textContent = '▼'; // Collapsed arrow (down)
      arrow.style.cursor = 'pointer';
      arrow.style.display = 'inline-block';
      arrow.style.transition = 'transform 0.2s';
      arrow.style.marginRight = '0.5em';

      // Create the command <p>
      const cmdP = document.createElement('p');
      cmdP.textContent = `simple ${command}`;
      cmdP.style.fontWeight = 'bold';
      cmdP.style.marginBottom = '0.2em';
      cmdP.style.fontFamily = "'Ubuntu Mono', monospace";
      cmdP.style.display = 'inline';

      // Create the description <p>
      const descP = document.createElement('p');
      descP.textContent = description;
      descP.style.marginTop = '0.5em';
      descP.style.marginBottom = '0';
      descP.style.fontFamily = "'Lexend', Arial, sans-serif";
      descP.style.fontWeight = 'normal';
      descP.style.display = 'none'; // Start collapsed

      // Toggle logic
      arrow.onclick = () => {
        const isOpen = descP.style.display === 'block';
        descP.style.display = isOpen ? 'none' : 'block';
        arrow.textContent = isOpen ? '▼' : '▲'; // ▼ for collapsed, ▲ for expanded
      };

      // Also allow clicking the command to toggle
      cmdP.onclick = arrow.onclick;

      // Assemble
      container.appendChild(arrow);
      container.appendChild(cmdP);
      container.appendChild(descP);
      cmdsDiv.appendChild(container);
    }
  })
  .catch(err => {
    document.getElementById('cmds').textContent = 'Failed to load commands.';
    console.error(err);
  });
