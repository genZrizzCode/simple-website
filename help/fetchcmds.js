fetch('../cmds.json')
  .then(response => response.json())
  .then(cmds => {
    const cmdsDiv = document.getElementById('cmds');
    const list = document.createElement('dl');
    for (const [command, description] of Object.entries(cmds)) {
      const dt = document.createElement('dt');
      dt.textContent = `simple ${command}`;
      dt.style.fontWeight = 'bold';
      const dd = document.createElement('dd');
      dd.textContent = description;
      dd.style.marginBottom = '1em';
      list.appendChild(dt);
      list.appendChild(dd);
    }
    cmdsDiv.appendChild(list);
  })
  .catch(err => {
    document.getElementById('cmds').textContent = 'Failed to load commands.';
    console.error(err);
  });
