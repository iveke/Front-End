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
    try{
        const res = await fetch(`${BASE_URL}/comments`, options)
        return console.log( res.json());
    } catch(err){
        alert(`sorry you have fail ${err}`)
    }
    
}