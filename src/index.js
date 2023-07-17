import { getComment, getPosts } from './js/r-get.js';
import { addComment } from './js/c-post.js';
import { updateComment, updatePost } from './js/u-patch';
import { deleteComment, deletePost } from './js/d-delete.js';
import { deleteCard } from './js/deleteCard.js';
import { upLoadPosts } from './js/upLoadPosts.js';

let cardId;
export const refs = {
    form: document.getElementById("form"),
    cards: document.querySelector(".cards"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    save: document.getElementById("save")
}

refs.cards.addEventListener('click', deleteCard);
refs.cards.addEventListener('click', updateCard);
refs.form.addEventListener('submit', onSubmitForm);
upLoadPosts();

function onSubmitForm(e) {
    
    e.preventDefault();
    const formData = new FormData(refs.form);
    const res = formData.get("comment");
    console.log(res);
    createComment(res);
}

 function createComment(res) {
    const comment = {
        'body': `${res}`,
    }
    console.log(comment)
    addComment(comment);
}

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