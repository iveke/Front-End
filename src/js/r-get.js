const BASE_URL = "http://localhost:1532";

export function getComment() {
    return fetch(`${BASE_URL}/comments`).then(res => res.json()).then(cons);
}

export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts`);
    return res.json();
}