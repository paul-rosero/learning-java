/*
  WRITE YOUR SOLUTION HERE
*/

const menus = [['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']];

function masterMenu (menus) {
  menus = menus.flat();
  const masterMenu = new Set();
  menus.forEach(plate => {
    masterMenu.add(plate);
  });

  const ul = document.getElementById("combined-menu");
  for (const dish of masterMenu) {
    const li = document.createElement("li");
    li.innerText = dish;
    ul.appendChild(li);
  }
};

masterMenu(menus);
