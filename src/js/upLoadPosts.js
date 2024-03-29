import { refs } from "..";
import { getPosts } from "./r-get";

export async function upLoadPosts() {
    refs.cards.innerHTML = "";
    const posts = await getPosts();
    const postStr = [];
    posts.forEach(elem => {
        const card = `<li id="${elem.id}" class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">${elem.title}</h5>
            <p class="card-text">${elem.body}</p>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" style="margin-top:10px" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Update</button>
        </div>
    </li>`;
        postStr.push(card);
    });
    refs.cards.insertAdjacentHTML('beforeend', postStr.join(""));
}