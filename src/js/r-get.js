const BASE_URL = "http://localhost:1532";

export async function getComment() {
    try {
        const res = await fetch(`${BASE_URL}/comments`);

        return res.json();

    } catch (err) {
        alert(`sorry you have fail ${err}`);
    }
}

export async function getPosts() {
    try {
        const res = await fetch(`${BASE_URL}/posts`);

        return res.json();

    } catch (err) {
        alert(`sorry you have fail ${err}`)
    }

}