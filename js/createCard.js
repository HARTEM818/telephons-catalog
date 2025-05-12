import { fetchInfo } from "./fetchInfo.js";

export async function createCard() {
  const info = await fetchInfo(); 
  const product = info.data[0]; 

  const list = document.querySelector(".list");

  const li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = `
    <img src="${product.image}" alt="">
    <h3>category: ${product.category}</h3>
    <p>description: ${product.description}</p>
  `;

  list.appendChild(li);
}