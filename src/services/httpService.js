


export const Get = (url)=>{
    return fetch(url,{
        method: "GET",
        headers: getHeaders()
    });
}

export const Put = (url,data)=>{
    return fetch(url,{
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
}
export const Post = (url,data)=>{
    return fetch(url,{
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
}
export const Delete = (url)=>{
    return fetch(url,{
        method: "DELETE",
        headers: getHeaders()
    });
}
export const PostFile = (url,data)=>{
    return fetch(url,{
        method: "POST",
        headers: getFileHeaders(),
        body: data
    });
}


function getHeaders(){
    return {
        "Content-Type":"application/json",
        "accessToken":localStorage.getItem('token')
    }
}
function getFileHeaders(){
    return {
        "Content-Type":undefined,
        "accessToken":localStorage.getItem('token')
    }
}