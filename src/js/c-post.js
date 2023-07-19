const BASE_URL = "http://localhost:1532"

export async function addComment(comment){
    const options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        "body": JSON.stringify(comment),
    };
    const res = await fetch(`${BASE_URL}/comments`, options)
    return console.log( res.json());
}