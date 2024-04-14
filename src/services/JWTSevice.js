import axios from "axios";

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
    },

    async refreshJWT(){
        try {
            const token = this.getToken();

            const request = {
                token: token,
            }

            const response = await axios.post("https://sobersponsor-server.onrender.com/api/user/refresh-jwt", request);

            this.removeToken();
            this.setToken(response.data.token);
        } catch (error) {
            console.log(error);
        }
    }
};

export default JWTServices;
