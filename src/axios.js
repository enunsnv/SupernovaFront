import axios from "axios";

const api = axios.create({
    baseURL: 'https://port-0-super-novabackend-lyo940s2bbe6eb1c.sel5.cloudtype.app/',
});

export default api;