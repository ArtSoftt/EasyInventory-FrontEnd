import http from "@/shared/services/http-common";
export class SalesApiService{
    create(data){
        return http.post('/sales',data);
    }
    getSalesById(id){
        return http.get(`/sales/${id}`);
    }

    deleteSaleById(id){
        return http.delete(`/sales/${id}`);
    }


    getSaleByIdUser(id){
        return http.get(`/sales?id_user=${id}`)
    }


}