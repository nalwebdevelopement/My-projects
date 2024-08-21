export const menuItems = [
    { name: "Pizza", price: "$10" },
    { name: "French Friesr", price: "$8" },
    { name: "MOcca frapi", price: "$12" },
];

export function displayMenu() {
    const menuElement = document.getElementById('menu');
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = `${item.name} - ${item.price}`;
        menuElement.appendChild(menuItem);
    });
}
