const BASE_URL = "http://localhost:1532"

export function addComment(comment){
    const options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(comment),
    };
    return fetch(`${BASE_URL}/comments`, options).then(res => res.json()).then(console.log);
}