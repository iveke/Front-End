import { getComment, getPosts } from './js/r-get.js';
import { addComment } from './js/c-post.js';
import { updateComment, updatePost } from './js/u-patch';
import { deleteComment, deletePost } from './js/d-delete.js';
import { deleteCard } from './js/deleteCard.js';
import { upLoadPosts } from './js/upLoadPosts.js';
import { upLoadComments } from './js/upLoadComments.js';
import { onSubmitForm } from './js/onSubmitForm.js';
import { updateCard } from './js/updateCard.js';


export const refs = {
    form: document.getElementById("form"),
    cards: document.querySelector(".cards"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    save: document.getElementById("save"),
    comments: document.querySelector(".comments")
}

refs.cards.addEventListener('click', deleteCard);
refs.cards.addEventListener('click', updateCard);
refs.form.addEventListener('submit', onSubmitForm);
upLoadPosts();
upLoadComments()





