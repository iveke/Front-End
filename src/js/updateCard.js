import { refs } from "..";
let cardId;
import { updatePost } from "./u-patch";
export function updateCard(e) {
    if (!e.target.classList.contains("btn-success")) {
        return;
    }
    const card = e.target.parentElement;
    const info = {
        title: card.querySelector(".card-title").textContent,
        text: card.querySelector(".card-text").textContent
    }
    refs.title.value = info.title;
    refs.body.value = info.text;
    console.log(cardId);
    cardId = card.parentElement.id;
    console.log(cardId)
    refs.save.addEventListener('click', saveChange);
}

async function saveChange(e) {
    e.preventDefault()
    const updateValue = {
        "title": `${refs.title.value}`,
        "body": `${refs.body.value}`
    }
    const updateCard = await updatePost(updateValue, cardId);
    const card = document.getElementById(`${updateCard.id}`);
    const title = card.querySelector(".card-title");
    const body = card.querySelector(".card-text");
    title.textContent = `${updateCard.title}`;
    body.textContent = `${updateCard.body}`;
}   