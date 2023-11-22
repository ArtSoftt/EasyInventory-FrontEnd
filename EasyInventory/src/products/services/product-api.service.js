import http from "@/shared/services/http-common";
const header ={
    'Authorization':`Bearer ${localStorage.getItem('token')}`
}
export class ProductApiService{
    postProduct(data){
        return http.post('/products',data,{headers:header});
    }
    getProductById(id)
    {
        return http.get(`/profileproduct/${id}`,{headers:header});
    }
    putProductById(id,data){
        return http.put(`/products/${id}`,data);
    }
    deleteProduct(id){
        return http.delete(`/products/${id}`,{headers:header});
    }
}