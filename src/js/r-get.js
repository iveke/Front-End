const BASE_URL = "http://localhost:1532";

export async function getComment() {
    const res = await fetch(`${BASE_URL}/comments`)
    return res.json();
}

export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts`);
    return res.json();
}