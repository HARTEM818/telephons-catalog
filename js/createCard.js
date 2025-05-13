import { fetchInfo } from "./fetchInfo.js";

export async function createCard() {
  const info = await fetchInfo();
  const products = info.data;
  const cards = products.map((elem, index, arr) => {
    const card = `
    <li class="list-item">
                    <img c src="${arr[index].image}" alt="">
                    <h3>category ${arr[index].category}</h3>
                    <p>description ${arr[index].description}</p>
                </li>
    `;


    return card;
  });
  return cards
}
