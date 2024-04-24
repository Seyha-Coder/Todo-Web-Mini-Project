

export const registerService = async (req) =>{
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/sign-up',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
        
    })
    const register = await res.json();
    return register;
}


export const loginService = async (userInfo) => {
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login', {
        method: 'POST',
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    return data;
}

//resource
//https://youtu.be/v6TPcU23wP8?si=_UGrVcoUKhxYi29b
//https://next-auth.js.org/getting-started/example