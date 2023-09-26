import http from "@/shared/services/http-common";
export class SalesApiService{
    create(data){
        return http.post('/list-sales',data);
    }

}