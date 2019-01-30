import decode from 'jwt-decode';

async function login(email, password){
    try {
        let input = {
            email,
            password
        }

        let response = await fetch("http://localhost:5000/api/user/login",
        {            
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input)
        });

        return response;

    } catch(error) {
        console.log(error);
    }
}

function logout(){
    console.log("Logout");
    localStorage.removeItem("token");
}

function isAuth(){
    return getToken() !== null;
}
function setToken(token){
    localStorage.setItem("token", token);
} 

function getToken(){
    return localStorage.getItem("token");
}

function getUser(){
    let token = getToken();
    if(token){
        return decode(getToken());
    }
    return null;
}

export default {
    login, 
    logout,
    isAuth,
    setToken,
    getUser
};