// Write your code here!


const main = document.querySelector('#main');
const newHeader = document.createElement('h1');

main.remove();

newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "Joshua is the champion"

document.body.append(newHeader)