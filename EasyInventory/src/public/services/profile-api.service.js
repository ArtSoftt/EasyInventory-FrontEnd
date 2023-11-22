import http from "@/shared/services/http-common";
export class ProfileApiService{
    createProfile(data){
        return http.post('/profiles',data);
    }
    getProfileById(id,authToken){
        const headers={
            'Authorization':`Bearer ${authToken}`
        }
        return http.get(`/profiles/${id}`,{headers:headers});
    }
}
