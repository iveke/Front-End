const BASE_URL = "http://localhost:1532";

export function deleteComment(commentId) {
    const options = {
        "method": "DELETE",
    }
    return fetch(`${BASE_URL}/comment/${commentId}`, options).then(res => res.json()).then(console.log);
}

export async function deletePost(cardID) {
    const options = {
        "method": "DELETE",
    }
    try{
        const res = await fetch(`${BASE_URL}/posts/${cardID}`, options);
    } catch(err){
        alert(`sorry you have fail ${err}`);
    }
   
   
}