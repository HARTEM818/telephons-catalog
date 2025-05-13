
import { createCard } from "./createCard.js"


export async function addCard(refs) {
    console.log("jsvnej");
    
    for (let index = 0; index < createCard().length; index++) {
        console.log("snefj");
        
        refs.list.appendChild(createCard()[index])
        console.log("sviewn");
        
    }
    
}