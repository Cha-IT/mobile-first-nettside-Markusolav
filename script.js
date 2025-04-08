
let order = [];


fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuList = document.getElementById('menu-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price} kr`;
        const addButton = document.createElement('button');
        addButton.textContent = 'Bestill';
    
      li.appendChild(addButton);
      menuList.appendChild(li);
    });
  })