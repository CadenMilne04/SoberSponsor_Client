import { useNavigate } from "react-router-dom";

const JWTServices = {

    setToken(token){
        const cookie = 'jwt=' + token + '; Secure;';
        document.cookie = cookie;
    },

    getToken(){
        return document.cookie.split('; ').find(row => row.startsWith('jwt='))?.split('=')[1] || null;
    },

    removeToken(){
        document.cookie = 'jwt=; Max-Age=0';
    },

    isLoggedIn(){
        //Get the token from the cookie
        const jwt = JWTServices.getToken();
        
        if(jwt == null){
            return null;
        }

        const decodedToken = JWTServices.parseJWT(jwt);
        return decodedToken;
    },

    parseJWT(token){
        try {
            return JSON.parse(atob(token.split('.')[1]));
        }
        catch (error) {
            return null;
        }
    }
};

export default JWTServices;
