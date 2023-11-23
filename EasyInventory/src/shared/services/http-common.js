//axios default configs
import axios from "axios";
const http =axios.create({

    baseURL:'https://webapieasyinventory.azurewebsites.net/api/v1',
    headers:{
        'Content-type': 'application/json',
    }
});

export default http;