import http from "@/shared/services/http-common";
export class ProductApiService{
    create(data){
        return http.post('/list-products',data);
    }
}