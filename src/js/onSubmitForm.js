import { refs } from "..";
import { addComment } from "./c-post";
import { upLoadComments } from "./upLoadComments";

export function onSubmitForm(e) {

    e.preventDefault();
    const formData = new FormData(refs.form);
    const res = formData.get("comment");
    const comment = {
        'body': `${res}`,
    }
    addComment(comment);
    upLoadComments();
    e.target.reset();
}