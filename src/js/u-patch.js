    const BASE_URL = "http://localhost:1532";

    export function updateComment(comment, commentId){
        const options = {
            "method": "PATCH",
            "headers": {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            "body": JSON.stringify(comment),
        }
        return fetch(`${BASE_URL}/comments/${commentId}`,options).then(res => res.json()).then(console.log);
    }

    export async function updatePost(comment, postId){
        const options = {
            "method": "PATCH",
            "headers": {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            "body": JSON.stringify(comment),    
        }
        const res = await fetch(`${BASE_URL}/posts/${postId}`);
        const data = res.json( );
        console.log(data)
        
    }