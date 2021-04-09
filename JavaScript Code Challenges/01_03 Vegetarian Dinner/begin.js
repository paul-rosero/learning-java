/*
  WRITE YOUR SOLUTION HERE
*/
veganMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
]);

function veganMenu(menu) {
  const nodeMenu = document.getElementById("menu");
  console.log(nodeMenu)
  const veggieMenu = menu.filter((plate) => plate.isVegetarian === true);
  
  veggieMenu.forEach((dish) => {
    let menuLi = document.createElement("li");
    menuLi.textContent = dish.name;
    nodeMenu.appendChild(menuLi);
  });
}