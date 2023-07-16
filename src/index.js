import { getComment, getPosts } from './js/r-get.js';
import { addComment } from './js/c-post.js';
import { updateComment, updatePost } from './js/u-patch';
import { deleteComment, deletePost } from './js/d-delete.js';
import { deleteCard } from './js/deleteCard.js';
import { upLoadPosts } from './js/upLoadPosts.js';

let cardId;
export const refs = {
    send: document.querySelector(".btn"),
    cards: document.querySelector(".cards"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    save: document.getElementById("save")
}

refs.cards.addEventListener('click', deleteCard);
refs.cards.addEventListener('click', updateCard);
upLoadPosts();


function updateCard(e) {
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
    cardId = card.parentElement.id;
    refs.save.addEventListener('click', saveChange);
}


function saveChange(e) {
    e.preventDefault()
    const updateValue = {
        "title":   `${refs.title.value}`,
        "body": `${refs.body.value}`
    }
    updatePost(updateValue, cardId);
    
}