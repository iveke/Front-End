import { deletePost } from "./d-delete";

export async function deleteCard(e) {
    if (!e.target.classList.contains("btn-danger")) {
        return;
    }
    const card = e.target.parentElement.parentElement;
    const cardID = card.id;
    deletePost(cardID);
    console.log("hi");
    card.remove();
}