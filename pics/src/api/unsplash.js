import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID QO3my55AOv928CIAJsKbiCosAgJgxLqx6YBizBL6HPE'
    }
});