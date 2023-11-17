import http from "@/shared/services/http-common";
export class ProductApiService{
    create(data){
        return http.post('/list-products',data);
    }
    getProductById(id)
    {
        return http.get(`/list-products/${id}`);
    }
    putProductById(id,data){
        return http.put(`/list-products/${id}`,data);
    }
}