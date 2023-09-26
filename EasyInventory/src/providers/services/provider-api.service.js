import http from "@/shared/services/http-common";
export class ProviderApiService{
    create(data){
        return http.post('/list-providers',data);
    }
}