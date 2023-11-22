import http from "@/shared/services/http-common"
export class AuthApiService{
    signUp(data){
        return http.post('/authentication/sign-up',data);
    }
    login(data){
        return http.post('/authentication/sign-in',data);
    }

}