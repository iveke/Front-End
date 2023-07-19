import { refs } from "..";
import { getComment } from "./r-get";

export async function upLoadComments() {
    refs.comments.innerHTML = "";
    const comments = await getComment();
    const commentsStr = [];
    comments.forEach(elem => {
        const comment = `<div class="card comment text-center">
        <div class="card-header">
            Comment${elem.id}
        </div>
        <div class="card-body">
            <p class="card-text">${elem.body}</p>
        </div>
    </div>`;
    commentsStr.push(comment);
    });
    refs.comments.insertAdjacentHTML("beforeend", commentsStr.join(""));
}