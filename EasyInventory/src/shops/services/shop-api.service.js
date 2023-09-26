import http from "@/shared/services/http-common";
export class ShopApiService{
    create(data){
        return http.post('/list-shops',data);
    }
}