import http from "@/shared/services/http-common";

export class CustomerApiService {
    create(data){
        return http.post('/list-customers', data);
    }
}